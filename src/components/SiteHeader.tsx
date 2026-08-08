import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fuer-geschaefte", label: "Für Geschäfte" },
  { href: "/kontakt", label: "Kontakte" },
];

export async function SiteHeader() {
  let isLoggedIn = false;
  let isPlatformAdmin = false;
  let hasBusiness = false;

  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    isLoggedIn = Boolean(data.user);
    if (data.user) {
      const { data: admin } = await supabase.from("platform_admins").select("user_id").eq("user_id", data.user.id).eq("is_active", true).maybeSingle();
      isPlatformAdmin = Boolean(admin);
      const { data: membership } = await supabase.from("organization_members").select("id").eq("user_id", data.user.id).eq("is_active", true).limit(1).maybeSingle();
      hasBusiness = Boolean(membership);
    }
  } catch {
    isLoggedIn = false;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#020617]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-white">
          Tap<span className="text-cyan-300">Radar</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={isPlatformAdmin ? "/admin" : isLoggedIn ? hasBusiness ? "/dashboard" : "/app" : "/login"}
          className="inline-flex h-11 items-center justify-center rounded-2xl bg-cyan-300 px-5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
        >
          {isPlatformAdmin ? "Administration" : isLoggedIn ? hasBusiness ? "Dashboard" : "Meine App" : "Anmelden"}
        </Link>
      </div>
    </header>
  );
}
