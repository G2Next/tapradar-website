"use client";

import { AppErrorScreen } from "@/components/AppErrorScreen";

export default function RootError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <AppErrorScreen error={error} reset={reset} source="root-boundary" />;
}
