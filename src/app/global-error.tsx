"use client";

import { AppErrorScreen } from "@/components/AppErrorScreen";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <html lang="de"><body className="bg-slate-950"><AppErrorScreen error={error} reset={reset} source="global-boundary" /></body></html>;
}
