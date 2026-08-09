import type { ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { legalNotices } from "@/i18n/legal";

export function LegalPage({
  title,
  date,
  children,
  locale = "de",
  germanHref,
}: {
  title: string;
  date?: string;
  children: ReactNode;
  locale?: Locale;
  germanHref?: string;
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-6xl">{title}</h1>
        {date ? <p className="mt-3 text-sm text-slate-400">{date}</p> : null}
        {locale !== "de" && germanHref ? <aside className="mt-7 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-5 text-sm leading-6 text-amber-50"><strong className="block">{legalNotices[locale].title}</strong><p className="mt-1">{legalNotices[locale].text}</p><Link href={germanHref} className="mt-3 inline-flex font-black text-amber-200 underline">{legalNotices[locale].german}</Link></aside> : null}
        <div className="legal-content mt-10">{children}</div>
      </div>
    </main>
  );
}
