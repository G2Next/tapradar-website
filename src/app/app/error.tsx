"use client";

import { AppErrorScreen } from "@/components/AppErrorScreen";

export default function CustomerAppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <AppErrorScreen error={error} reset={reset} source="customer-app-boundary" title="Wallet nicht erreichbar" homeHref="/app" />;
}
