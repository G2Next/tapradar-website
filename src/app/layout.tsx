import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TapRadar",
  description: "TapRadar website and dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
