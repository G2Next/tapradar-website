"use client";

import { useFormStatus } from "react-dom";

export function FormSubmitButton({ label, pendingLabel = "Wird gespeichert …", className = "" }: { label: string; pendingLabel?: string; className?: string }) {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending} aria-busy={pending} className={`${className} disabled:cursor-wait disabled:bg-slate-600 disabled:text-white disabled:opacity-100`}>
    {pending ? pendingLabel : label}
  </button>;
}
