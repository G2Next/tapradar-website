import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { ConsentGateClient } from "@/components/ConsentGateClient";
import {
  COOKIE_CONSENT_NAME,
  hasConsent,
  type ConsentCategory,
} from "@/lib/cookie-consent";

export async function ConsentGate({ category, children }: { category: Exclude<ConsentCategory, "necessary">; children: ReactNode }) {
  const cookieValue = (await cookies()).get(COOKIE_CONSENT_NAME)?.value;
  return (
    <ConsentGateClient category={category} initialConsent={hasConsent(cookieValue, category)}>
      {children}
    </ConsentGateClient>
  );
}
