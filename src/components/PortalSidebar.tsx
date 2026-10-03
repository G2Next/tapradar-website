"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import { hasAdminPermission, type AdminPermission } from "@/lib/admin-permissions";

type Item = { href: string; label: string; icon: string; exact?: boolean; permission?: AdminPermission };
type Group = { label: string; items: Item[] };

const adminOverview: Item = { href: "/admin", label: "Übersicht", icon: "⌂", exact: true };
const adminGroups: Group[] = [
  { label: "Plattform", items: [
    { href: "/admin/organizations", label: "Unternehmen", icon: "▣", permission: "organizations.view" },
    { href: "/admin/customers", label: "Kunden", icon: "♙", permission: "customers.view" },
  ] },
  { label: "Inhalte", items: [
    { href: "/admin/marketing", label: "Freigaben", icon: "✓", permission: "marketing.view" },
  ] },
  { label: "Umsatz", items: [
    { href: "/admin/products", label: "Abos & Preise", icon: "◆", permission: "billing.view" },
    { href: "/admin/billing", label: "Rechnungen", icon: "▤", permission: "billing.view" },
    { href: "/admin/payments", label: "Zahlungen", icon: "€", permission: "payments.view" },
  ] },
  { label: "Kommunikation", items: [
    { href: "/admin/messages", label: "Nachrichten & Support", icon: "✉", permission: "support.view" },
    { href: "/admin/email-templates", label: "E-Mail-Vorlagen", icon: "▧", permission: "email_templates.view" },
  ] },
  { label: "System", items: [
    { href: "/admin/team", label: "Team & Rollen", icon: "♙", permission: "team.manage" },
    { href: "/admin/security", label: "2FA & Sitzung", icon: "◇" },
    { href: "/admin/audit-log", label: "Audit-Log", icon: "≡", permission: "audit.view" },
    { href: "/admin/api-keys", label: "API-Schlüssel", icon: "⌘", permission: "api_keys.manage" },
    { href: "/admin/captcha", label: "reCAPTCHA", icon: "◫", permission: "captcha.manage" },
    { href: "/admin/operations", label: "Datenschutz & Betrieb", icon: "◈", permission: "operations.manage" },
    { href: "/admin/errors", label: "Fehlerzentrale", icon: "⚠", permission: "errors.manage" },
  ] },
];

const dashboardItems: Item[] = [
  { href: "/dashboard", label: "Übersicht", icon: "⌂", exact: true },
  { href: "/dashboard/business", label: "Unternehmen", icon: "▣" },
  { href: "/dashboard/locations", label: "Filialen", icon: "⌖" },
  { href: "/dashboard/loyalty-cards", label: "Treuekarten", icon: "★" },
  { href: "/dashboard/actions", label: "Aktionen", icon: "🔥" },
  { href: "/dashboard/vouchers", label: "Gutscheine", icon: "🎟" },
  { href: "/dashboard/push", label: "Push-Nachrichten", icon: "🔔" },
  { href: "/dashboard/devices", label: "QR- / NFC-Geräte", icon: "⌁" },
  { href: "/dashboard/redeem", label: "Belohnung einlösen", icon: "✓" },
  { href: "/dashboard/analytics", label: "Statistik", icon: "↗" },
  { href: "/dashboard/team", label: "Team & Rechte", icon: "♙" },
  { href: "/dashboard/media", label: "Medien & Dateien", icon: "▧" },
  { href: "/dashboard/billing", label: "Tarif & Rechnungen", icon: "€" },
  { href: "/dashboard/privacy", label: "Datenschutz & Konto", icon: "◈" },
];

type Props = {
  mode: "admin" | "dashboard";
  locale: Locale;
  languageLabel: string;
  languageChoose: string;
  dashboardApproved?: boolean;
  adminProfile?: { email: string; role: string };
};

export function PortalSidebar(props: Props) {
  return props.mode === "admin" ? <AdminSidebar {...props}/> : <DashboardSidebar {...props}/>;
}

function AdminSidebar({locale,languageChoose,adminProfile}:{locale:Locale;languageLabel:string;languageChoose:string;adminProfile?:Props["adminProfile"]}) {
  const pathname = usePathname();
  const role = adminProfile?.role ?? "support";
  const navigation = <nav aria-label="Admin-Navigation" className="grid gap-6">
    <NavLink item={adminOverview} pathname={pathname}/>
    {adminGroups.map(group=>({ ...group, items: group.items.filter(item=>!item.permission||hasAdminPermission(role,item.permission)) })).filter(group=>group.items.length>0).map(group=><section key={group.label}><p className="mb-2 px-3 text-[11px] font-black uppercase tracking-[.2em] text-slate-600">{group.label}</p><div className="grid gap-1">{group.items.map(item=><NavLink key={item.href} item={item} pathname={pathname}/>)}</div></section>)}
  </nav>;
  const footer = <div className="border-t border-white/10 bg-[#050d18] p-4">
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-300/15 font-black text-purple-100">{initials(adminProfile?.email)}</span><div className="min-w-0"><p className="truncate text-sm font-bold text-white">{adminProfile?.email ?? "Administrator"}</p><p className="mt-0.5 text-xs text-slate-500">{roleLabel(adminProfile?.role)}</p></div></div>
    <div className="mt-3"><LanguageSwitcher locale={locale} label={languageChoose} fullWidth/></div>
    <div className="mt-3 grid grid-cols-2 gap-2"><Link href="/" className="rounded-xl bg-white/[0.06] px-3 py-2.5 text-center text-xs font-black text-slate-300 transition hover:bg-white/10 hover:text-white">↗ Website</Link><form action="/logout" method="post"><button type="submit" className="w-full rounded-xl bg-white/[0.06] px-3 py-2.5 text-xs font-black text-slate-300 transition hover:bg-red-300/10 hover:text-red-100">⇥ Abmelden</button></form></div>
  </div>;
  return <>
    <aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-72 shrink-0 flex-col border-r border-white/10 bg-[#07111f] text-white lg:flex"><Link href="/admin" className="flex items-center gap-3 border-b border-white/10 px-5 py-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-300 to-cyan-300 font-black text-slate-950">T</span><span><strong className="block text-base">TapRadar</strong><span className="text-xs font-bold uppercase tracking-[.18em] text-purple-200">Administration</span></span></Link><div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">{navigation}</div>{footer}</aside>
    <details className="border-b border-white/10 bg-[#07111f] text-white lg:hidden"><summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-black"><span className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-purple-300 to-cyan-300 text-slate-950">T</span>Admin-Menü</span><span aria-hidden className="text-purple-200">⌄</span></summary><div className="max-h-[calc(100vh-130px)] overflow-y-auto border-t border-white/10 px-4 py-5">{navigation}<div className="-mx-4 -mb-5 mt-6">{footer}</div></div></details>
  </>;
}

function DashboardSidebar({locale,languageLabel,languageChoose,dashboardApproved=true}:Props) {
  const pathname = usePathname();
  const items=dashboardApproved?dashboardItems:dashboardItems.slice(0,3);
  const language=<div className="mb-5 border-b border-white/10 px-3 pb-5"><p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-slate-500">{languageLabel}</p><LanguageSwitcher locale={locale} label={languageChoose} fullWidth/></div>;
  const links=<nav className="grid gap-1.5">{items.map(item=><NavLink key={item.href} item={item} pathname={pathname} tone="cyan"/>)}<form action="/logout" method="post"><button type="submit" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-white/[0.07] hover:text-white"><span className="w-5 text-center text-base" aria-hidden>⇥</span><span>Abmelden</span></button></form></nav>;
  return <><aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-64 shrink-0 overflow-y-auto border-r border-white/10 bg-[#07111f] p-5 lg:block"><p className="mb-5 px-3 text-xs font-black uppercase tracking-[.18em] text-slate-500">Geschäftsbereich</p>{language}{links}</aside><details className="border-b border-white/10 bg-[#07111f] px-5 py-3 text-white lg:hidden"><summary className="cursor-pointer font-black">Menü · Geschäftsbereich</summary><div className="mt-3">{language}{links}</div></details></>;
}

function NavLink({item,pathname,tone="purple"}:{item:Item;pathname:string;tone?:"purple"|"cyan"}){const active=item.exact?pathname===item.href:pathname.startsWith(item.href);const selected=tone==="purple"?"bg-purple-300/15 text-purple-100 ring-1 ring-inset ring-purple-300/10":"bg-cyan-300/15 text-cyan-100";return <Link href={item.href} aria-current={active?"page":undefined} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${active?selected:"text-slate-300 hover:bg-white/[0.07] hover:text-white"}`}><span className="w-5 text-center text-base" aria-hidden>{item.icon}</span><span>{item.label}</span></Link>}
function initials(email?:string){const name=email?.split("@")[0]?.replace(/[^a-z0-9]+/gi," ").trim();if(!name)return "A";return name.split(/\s+/).slice(0,2).map(part=>part[0]?.toUpperCase()).join("")||"A"}
function roleLabel(role?:string){return role==="super_admin"?"Super Admin":role==="operations"?"Betrieb":role==="finance"?"Finanzen":role==="support"?"Support":"Admin"}
