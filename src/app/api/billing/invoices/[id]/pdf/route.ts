import { NextResponse } from "next/server";
import { getInvoiceDocumentData, loadInvoiceLogo } from "@/lib/billing-documents";
import { generateInvoicePdf } from "@/lib/invoice-pdf";
import { createRequestClient } from "@/lib/supabase/request";

export const runtime = "nodejs";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const supabase = await createRequestClient(request); const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "authentication_required" }, { status: 401 });
  const { data: allowed } = await supabase.from("billing_invoices").select("id").eq("id", id).maybeSingle();
  if (!allowed) return NextResponse.json({ error: "not_found" }, { status: 404 });
  const data = await getInvoiceDocumentData(id); if (!data) return NextResponse.json({ error: "not_found" }, { status: 404 });
  const logo = await loadInvoiceLogo(data.settings); const pdf = await generateInvoicePdf({ ...data, logoBytes: logo.bytes, logoMime: logo.mime }); const filename = `TapRadar-Rechnung-${(data.invoice.invoice_number ?? data.invoice.id).replace(/[^a-zA-Z0-9_-]/g, "-")}.pdf`;
  return new NextResponse(Buffer.from(pdf), { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${filename}"`, "Cache-Control": "private, no-store" } });
}
