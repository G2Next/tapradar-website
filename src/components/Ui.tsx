import Link from "next/link";
import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-300">
      {children}
    </span>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-300/20 transition duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-black text-white transition duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-cyan-300/50 active:translate-y-0 active:scale-[0.97]"
    >
      {children}
    </Link>
  );
}

export function SectionTitle({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-5 text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-lg leading-8 text-slate-300">{children}</p> : null}
    </div>
  );
}
