import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { existsSync } from "node:fs";

const { pathname } = vi.hoisted(() => ({ pathname: vi.fn(() => "/dashboard/online-shop") }));
vi.mock("next/navigation", () => ({ usePathname: pathname }));
vi.mock("@/components/LanguageSwitcher", () => ({ LanguageSwitcher: () => null }));
import { PortalSidebar } from "./PortalSidebar";

function render(approved = true) {
  return renderToStaticMarkup(<PortalSidebar mode="dashboard" locale="de" languageLabel="Sprache" languageChoose="Sprache wählen" dashboardApproved={approved}/>);
}
describe("merchant navigation", () => {
  it("opens the active shop group and marks its page", () => {
    pathname.mockReturnValue("/dashboard/online-shop");
    const html = render();
    expect(html).toMatch(/<a(?=[^>]*href="\/dashboard\/online-shop")(?=[^>]*aria-current="page")[^>]*>/);
    expect(html).toContain("QR-/NFC-Geräte");
    expect(html).toContain("Statistik &amp; Berichte");
  });
  it("opens marketing for a nested voucher route", () => {
    pathname.mockReturnValue("/dashboard/vouchers/new");
    const html = render();
    expect(html).toMatch(/<a(?=[^>]*href="\/dashboard\/vouchers")(?=[^>]*aria-current="page")[^>]*>/);
    expect(html).toContain("Push-Nachrichten");
  });
  it("restricts pending businesses to company preparation", () => {
    pathname.mockReturnValue("/dashboard/business");
    const html = render(false);
    expect(html).toContain('href="/dashboard/locations"');
    for (const path of ["online-shop", "team", "media", "analytics", "billing", "account"]) expect(html).not.toContain(`href="/dashboard/${path}"`);
  });
  it("points each expanded section to existing pages", () => {
    for (const path of ["business", "actions", "loyalty-cards", "online-shop", "account"]) {
      pathname.mockReturnValue(`/dashboard/${path}`);
      for (const match of render().matchAll(/href="(\/dashboard[^"?#]*)"/g)) expect(existsSync(`src/app${match[1]}/page.tsx`)).toBe(true);
    }
  });
});
