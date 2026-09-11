import { beforeEach, describe, expect, it, vi } from "vitest";
const auth = vi.hoisted(() => ({ requirePlatformAdmin: vi.fn() }));
vi.mock("@/lib/admin", () => auth);
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("@/lib/notifications", () => ({ enqueueNotification: vi.fn() }));
import { queueTemplateTest, saveEmailSettings, saveEmailTemplate } from "./actions";
import { enqueueNotification } from "@/lib/notifications";
beforeEach(() => vi.clearAllMocks());
describe("email administration authorization", () => {
  it("checks admin authorization for every mutation, including forged requests", async () => {
    auth.requirePlatformAdmin.mockRejectedValue(new Error("admin-required"));
    await expect(saveEmailTemplate({}, new FormData())).rejects.toThrow("admin-required");
    await expect(saveEmailSettings(new FormData())).rejects.toThrow("admin-required");
    await expect(queueTemplateTest(new FormData())).rejects.toThrow("admin-required");
    expect(auth.requirePlatformAdmin).toHaveBeenCalledTimes(3);
    expect(enqueueNotification).not.toHaveBeenCalled();
  });
});
