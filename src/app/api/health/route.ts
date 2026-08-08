import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "ok", service: "tapradar-web", time: new Date().toISOString() }, { headers: { "Cache-Control": "no-store" } });
}
