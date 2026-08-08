import { createAdminClient } from "@/lib/supabase/admin";
import type { InvoiceOrganization, InvoiceRecord, InvoiceSettings, SummaryRow } from "@/lib/invoice-pdf";

export async function getInvoiceDocumentData(invoiceId: string) {
  const admin = createAdminClient();
  const [{ data: invoice }, { data: settings }] = await Promise.all([
    admin.from("billing_invoices").select("id,organization_id,invoice_number,status,currency,subtotal_amount,tax_amount,total_amount,customer_country_code,vat_treatment,issued_at,paid_at").eq("id", invoiceId).maybeSingle(),
    admin.from("invoice_settings").select("*").eq("id", true).single(),
  ]);
  if (!invoice || !settings) return null;
  const [{ data: organization }, { data: subscription }] = await Promise.all([
    admin.from("organizations").select("name,legal_name,billing_email,billing_address,billing_postal_code,billing_city,billing_country_code,tax_id").eq("id", invoice.organization_id).single(),
    admin.from("subscriptions").select("subscription_products(name)").eq("organization_id", invoice.organization_id).maybeSingle(),
  ]);
  if (!organization) return null;
  const product = Array.isArray(subscription?.subscription_products) ? subscription?.subscription_products[0] : subscription?.subscription_products;
  return { invoice: invoice as InvoiceRecord, organization: organization as InvoiceOrganization, settings: settings as InvoiceSettings, productName: product?.name ?? null };
}

export async function getMonthlyRows(month: string) {
  const [year, monthNumber] = month.split("-").map(Number); const start = new Date(Date.UTC(year, monthNumber - 1, 1)); const end = new Date(Date.UTC(year, monthNumber, 1));
  const admin = createAdminClient();
  const [{ data: invoices }, { data: settings }] = await Promise.all([
    admin.from("billing_invoices").select("id,organization_id,invoice_number,status,currency,subtotal_amount,tax_amount,total_amount,customer_country_code,vat_treatment,issued_at,paid_at,organizations(name,legal_name,billing_email,billing_address,billing_postal_code,billing_city,billing_country_code,tax_id)").gte("issued_at", start.toISOString()).lt("issued_at", end.toISOString()).order("issued_at", { ascending: true }),
    admin.from("invoice_settings").select("*").eq("id", true).single(),
  ]);
  const rows = (invoices ?? []).map(invoice => ({ ...invoice, organization: (Array.isArray(invoice.organizations) ? invoice.organizations[0] : invoice.organizations) as InvoiceOrganization })) as SummaryRow[];
  return { rows, settings: settings as InvoiceSettings };
}

export async function loadInvoiceLogo(settings: InvoiceSettings) {
  if (!settings.logo_url) return { bytes: null, mime: null };
  try { const response = await fetch(settings.logo_url, { cache: "no-store" }); if (!response.ok) return { bytes: null, mime: null }; const buffer = new Uint8Array(await response.arrayBuffer()); if (buffer.length > 2_097_152) return { bytes: null, mime: null }; return { bytes: buffer, mime: response.headers.get("content-type") }; } catch { return { bytes: null, mime: null }; }
}
