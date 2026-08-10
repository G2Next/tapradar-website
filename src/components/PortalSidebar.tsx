"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";

type Item = { href: string; label: string; icon: string; exact?: boolean };

const adminItems: Item[] = [
  { href: "/admin", label: "Übersicht", icon: "⌂", exact: true },
  { href: "/admin/messages", label: "Nachrichten", icon: "✉" },
  { href: "/admin/products", label: "Produkte & Preise", icon: "◆" },
  { href: "/admin/payments", label: "Zahlungsanbieter", icon: "◉" },
  { href: "/admin/billing", label: "Rechnungen", icon: "▤" },
  { href: "/admin/api-keys", label: "API-Schlüssel", icon: "⌘" },
  { href: "/admin/operations", label: "Betrieb & Datenschutz", icon: "⚙" },
  { href: "/", label: "Website öffnen", icon: "↗" },
  { href: "/logout", label: "Abmelden", icon: "⇥" },
];

const dashboardItems: Item[] = [
  { href: "/dashboard", label: "Übersicht", icon: "⌂", exact: true },
  { href: "/dashboard/business", label: "Unternehmen", icon: "▣" },
  { href: "/dashboard/locations", label: "Filialen", icon: "⌖" },
  { href: "/dashboard/loyalty-cards", label: "Treuekarten", icon: "★" },
  { href: "/dashboard/offers", label: "Aktionen & Gutscheine", icon: "%" },
  { href: "/dashboard/devices", label: "QR- / NFC-Geräte", icon: "⌁" },
  { href: "/dashboard/redeem", label: "Belohnung einlösen", icon: "✓" },
  { href: "/dashboard/analytics", label: "Statistik", icon: "↗" },
  { href: "/dashboard/team", label: "Team & Rechte", icon: "♙" },
  { href: "/dashboard/media", label: "Medien & Dateien", icon: "▧" },
  { href: "/dashboard/billing", label: "Tarif & Rechnungen", icon: "€" },
  { href: "/dashboard/privacy", label: "Datenschutz & Konto", icon: "◈" },
  { href: "/logout", label: "Abmelden", icon: "⇥" },
];

export function PortalSidebar({
  mode,
  locale,
  languageLabel,
  languageChoose,
}: {
  mode: "admin" | "dashboard";
  locale: Locale;
  languageLabel: string;
  languageChoose: string;
}) {
  const pathname = usePathname();
  const items = mode === "admin" ? adminItems : dashboardItems;
  const title = mode === "admin" ? "Administration" : "Geschäftsbereich";
  const tone = mode === "admin" ? "text-purple-200 bg-purple-300/15" : "text-cyan-200 bg-cyan-300/15";
  const languageControl = <div className="mb-5 border-b border-white/10 px-3 pb-5">
    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">{languageLabel}</p>
    <LanguageSwitcher locale={locale} label={languageChoose} fullWidth />
  </div>;
  const links = <nav className="grid gap-1.5">{items.map((item) => {
    const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
    return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${active ? tone : "text-slate-300 hover:bg-white/[0.07] hover:text-white"}`}>
      <span className="w-5 text-center text-base" aria-hidden>{item.icon}</span><span>{item.label}</span>
    </Link>;
  })}</nav>;
  return <>
    <aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-64 shrink-0 overflow-y-auto border-r border-white/10 bg-[#07111f] p-5 lg:block">
      <p className="mb-5 px-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">{title}</p>{languageControl}{links}
    </aside>
    <details className="border-b border-white/10 bg-[#07111f] px-5 py-3 text-white lg:hidden">
      <summary className="cursor-pointer font-black">Menü · {title}</summary><div className="mt-3">{languageControl}{links}</div>
    </details>
  </>;
}
