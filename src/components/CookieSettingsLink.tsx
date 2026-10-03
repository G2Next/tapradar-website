"use client";

import type { ReactNode } from "react";
import { COOKIE_SETTINGS_OPEN_EVENT } from "@/lib/cookie-consent";

export function CookieSettingsLink({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="text-left hover:text-cyan-300"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_OPEN_EVENT))}
    >
      {children}
    </button>
  );
}
