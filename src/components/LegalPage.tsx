import type { ReactNode } from "react";

export function LegalPage({
  title,
  date,
  children,
}: {
  title: string;
  date?: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0b4f63_0%,#061827_35%,#020617_100%)] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-6xl">{title}</h1>
        {date ? <p className="mt-3 text-sm text-slate-400">{date}</p> : null}
        <div className="legal-content mt-10">{children}</div>
      </div>
    </main>
  );
}
