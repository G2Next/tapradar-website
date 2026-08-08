import JSZip from "jszip";
import { NextResponse } from "next/server";
import { getInvoiceDocumentData, getMonthlyRows, loadInvoiceLogo } from "@/lib/billing-documents";
import { generateInvoicePdf, generateMonthlyCsv, generateMonthlySummaryPdf } from "@/lib/invoice-pdf";
import { createRequestClient } from "@/lib/supabase/request";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const supabase = await createRequestClient(request); const { data: auth } = await supabase.auth.getUser(); if (!auth.user) return NextResponse.json({ error: "authentication_required" }, { status: 401 });
  const { data: admin } = await supabase.from("platform_admins").select("user_id").eq("user_id", auth.user.id).eq("is_active", true).maybeSingle(); if (!admin) return NextResponse.json({ error: "admin_required" }, { status: 403 });
  const url = new URL(request.url); const month = url.searchParams.get("month") ?? ""; const format = url.searchParams.get("format") ?? "pdf"; if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) return NextResponse.json({ error: "invalid_month" }, { status: 400 });
  const { rows, settings } = await getMonthlyRows(month); if (!settings) return NextResponse.json({ error: "settings_missing" }, { status: 503 });
  if (format === "csv") return new NextResponse(generateMonthlyCsv(month, rows), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="TapRadar-Buchhaltung-${month}.csv"`, "Cache-Control": "private, no-store" } });
  if (format === "zip") { const zip = new JSZip(); zip.file(`TapRadar-Buchhaltung-${month}.csv`, generateMonthlyCsv(month, rows)); zip.file(`TapRadar-Monatsauswertung-${month}.pdf`, await generateMonthlySummaryPdf({ month, rows, settings })); for (const row of rows) { const data = await getInvoiceDocumentData(row.id); if (!data) continue; const logo = await loadInvoiceLogo(data.settings); const pdf = await generateInvoicePdf({ ...data, logoBytes: logo.bytes, logoMime: logo.mime }); const number = (row.invoice_number ?? row.id).replace(/[^a-zA-Z0-9_-]/g, "-"); zip.file(`Rechnungen/TapRadar-Rechnung-${number}.pdf`, pdf); } const archive = await zip.generateAsync({ type: "uint8array", compression: "DEFLATE" }); return new NextResponse(Buffer.from(archive), { headers: { "Content-Type": "application/zip", "Content-Disposition": `attachment; filename="TapRadar-Monatsabschluss-${month}.zip"`, "Cache-Control": "private, no-store" } }); }
  const pdf = await generateMonthlySummaryPdf({ month, rows, settings }); return new NextResponse(Buffer.from(pdf), { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="TapRadar-Monatsauswertung-${month}.pdf"`, "Cache-Control": "private, no-store" } });
}
