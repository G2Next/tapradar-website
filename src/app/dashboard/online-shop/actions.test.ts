import { beforeEach, describe, expect, it, vi } from "vitest";

const { context, upsert, from, revalidate } = vi.hoisted(() => {
  const upsert = vi.fn();
  return { context: vi.fn(), upsert, from: vi.fn(() => ({ upsert })), revalidate: vi.fn() };
});
vi.mock("@/lib/dashboard", () => ({ requireApprovedDashboardContext: context }));
vi.mock("next/cache", () => ({ revalidatePath: revalidate }));
import { saveOnlineShop } from "./actions";

function form(organizationId = "org-a") {
  const data = new FormData();
  for (const [key, value] of Object.entries({ organization_id: organizationId, has_shop: "on", name: "Shop", url: "https://example.at", platform: "woocommerce", description: "Test" })) data.set(key, value);
  return data;
}
beforeEach(() => {
  vi.clearAllMocks();
  context.mockResolvedValue({ user: { id: "user-a" }, organizationId: "org-a", role: "owner", supabase: { from } });
  upsert.mockResolvedValue({ error: null });
});
describe("saveOnlineShop", () => {
  it("stores the profile under the authenticated organization", async () => {
    expect((await saveOnlineShop({ status: "idle" }, form())).status).toBe("saved");
    expect(from).toHaveBeenCalledWith("organization_online_shops");
    expect(upsert).toHaveBeenCalledWith(expect.objectContaining({ organization_id: "org-a", name: "Shop", has_shop: true }), { onConflict: "organization_id" });
    expect(revalidate).toHaveBeenCalledWith("/dashboard/online-shop");
  });
  it.each(["staff", null])("blocks writes from role %s", async role => {
    context.mockResolvedValue({ user: { id: "user-a" }, organizationId: "org-a", role, supabase: { from } });
    expect((await saveOnlineShop({ status: "idle" }, form())).status).toBe("error");
    expect(from).not.toHaveBeenCalled();
  });
  it("blocks anonymous writes", async () => {
    context.mockResolvedValue({ user: null, organizationId: null, role: null });
    expect((await saveOnlineShop({ status: "idle" }, form())).status).toBe("error");
    expect(from).not.toHaveBeenCalled();
  });
  it("rejects another organization and stale forms after context changes", async () => {
    expect((await saveOnlineShop({ status: "idle" }, form("org-b"))).status).toBe("error");
    expect(from).not.toHaveBeenCalled();
  });
  it("does not write invalid shop URLs", async () => {
    const data = form(); data.set("url", "javascript:alert(1)");
    expect((await saveOnlineShop({ status: "idle" }, data)).status).toBe("error");
    expect(from).not.toHaveBeenCalled();
  });
  it("reports database errors without claiming a successful save", async () => {
    upsert.mockResolvedValue({ error: { message: "denied" } });
    expect((await saveOnlineShop({ status: "idle" }, form())).status).toBe("error");
    expect(revalidate).not.toHaveBeenCalled();
  });
});
