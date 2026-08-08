import { redirect } from "next/navigation";
import { PortalSidebar } from "@/components/PortalSidebar";
import { hasCurrentLegalAcceptance } from "@/lib/legal-consent";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data.user && !(await hasCurrentLegalAcceptance(data.user.id, "account"))) {
    redirect("/rechtliches?next=/dashboard");
  }
  return <div className="min-h-screen bg-slate-950 lg:flex"><PortalSidebar mode="dashboard"/><div className="min-w-0 flex-1">{children}</div></div>;
}
