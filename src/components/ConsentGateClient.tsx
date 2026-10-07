"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  hasConsent,
  type ConsentCategory,
} from "@/lib/cookie-consent";

export function ConsentGateClient({ category, initialConsent, children }: { category: ConsentCategory; initialConsent: boolean; children: ReactNode }) {
  const [allowed, setAllowed] = useState(initialConsent);

  useEffect(() => {
    const update = () => setAllowed(hasConsent(document.cookie, category));
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, update);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, update);
  }, [category]);

  return allowed ? children : null;
}
