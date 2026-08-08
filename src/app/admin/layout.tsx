import { PortalSidebar } from "@/components/PortalSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-950 lg:flex"><PortalSidebar mode="admin"/><div className="min-w-0 flex-1">{children}</div></div>;
}
