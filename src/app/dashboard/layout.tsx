import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { PortalSidebar } from "@/components/PortalSidebar";
import { chromeMessages } from "@/i18n/chrome";
import { getLocale } from "@/i18n/server";
import { hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { isPreApprovalDashboardPath } from "@/lib/dashboard-access";
import { getDashboardContext } from "@/lib/dashboard";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const language = (chromeMessages[locale] ?? chromeMessages.de).language;
  const [context, requestHeaders] = await Promise.all([getDashboardContext(), headers()]);
  if (context.user && !(await hasCurrentLegalAcceptance(context.user.id, "account"))) {
    redirect("/rechtliches?next=/dashboard");
  }
  const pathname = requestHeaders.get("x-tapradar-pathname");
  if (context.organizationId && !context.isApproved && !isPreApprovalDashboardPath(pathname)) {
    redirect("/dashboard?approval=pending");
  }
  return <div className="min-h-screen bg-slate-950 lg:flex"><PortalSidebar mode="dashboard" locale={locale} languageLabel={language.label} languageChoose={language.choose} dashboardApproved={context.isApproved}/><div className="min-w-0 flex-1">{children}</div></div>;
}
