"use client";

import { AppErrorScreen } from "@/components/AppErrorScreen";

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <AppErrorScreen error={error} reset={reset} source="dashboard-boundary" title="Dashboard konnte nicht geladen werden" homeHref="/dashboard" />;
}
