import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passwort vergessen | TapRadar",
  description: "Setze dein TapRadar-Passwort über einen sicheren Link zurück.",
  robots: { index: false, follow: false },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
