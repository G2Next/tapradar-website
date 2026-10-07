import { requirePlatformAdminIdentity } from "@/lib/admin";
import { PortalSidebar } from "@/components/PortalSidebar";
import { chromeMessages } from "@/i18n/chrome";
import { getLocale } from "@/i18n/server";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const [{ user, admin }, locale] = await Promise.all([requirePlatformAdminIdentity(), getLocale()]);
  const language = (chromeMessages[locale] ?? chromeMessages.de).language;
  return <div className="min-h-screen bg-slate-950 lg:flex"><PortalSidebar mode="admin" locale={locale} languageLabel={language.label} languageChoose={language.choose} adminProfile={{ email: user.email ?? "Administrator", role: admin.role }}/><div className="min-w-0 flex-1">{children}</div></div>;
}
