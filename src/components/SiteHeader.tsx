import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { chromeMessages } from "@/i18n/chrome";
import { localizedPath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";

export async function SiteHeader() {
  const locale = await getLocale();
  const messages = chromeMessages[locale] ?? chromeMessages.de;
  const navItems = [
    { href: "/", label: messages.nav.home },
    { href: "/fuer-geschaefte", label: messages.nav.business },
    { href: "/kontakt", label: messages.nav.contact },
  ];
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
        <Link href={localizedPath(locale, "/")} className="text-xl font-black tracking-tight text-white">
          Tap<span className="text-cyan-300">Radar</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={localizedPath(locale, item.href)} className="transition hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} label={messages.language.choose} />
          <Link
            href={isPlatformAdmin ? "/admin" : isLoggedIn ? hasBusiness ? "/dashboard" : "/app" : "/login"}
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-cyan-300 px-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:px-5"
          >
            {isPlatformAdmin ? messages.account.admin : isLoggedIn ? hasBusiness ? messages.account.dashboard : messages.account.app : messages.account.login}
          </Link>
        </div>
      </div>
    </header>
  );
}
