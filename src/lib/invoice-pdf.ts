import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";

export type InvoiceSettings = {
  company_name: string; legal_name?: string | null; slogan?: string | null; address?: string | null; postal_code?: string | null; city?: string | null; country_code: string; email?: string | null; phone?: string | null; website?: string | null; registration_number?: string | null; tax_id?: string | null; iban?: string | null; bic?: string | null; bank_name?: string | null; logo_url?: string | null; logo_position: "left" | "center" | "right"; accent_color: string; footer_text?: string | null; invoice_prefix: string; payment_terms_days: number;
};

export type InvoiceRecord = { id: string; invoice_number?: string | null; status: string; currency: string; subtotal_amount: number; tax_amount: number; total_amount: number; customer_country_code?: string | null; vat_treatment: string; issued_at?: string | null; paid_at?: string | null };
export type InvoiceOrganization = { name: string; legal_name?: string | null; billing_email?: string | null; billing_address?: string | null; billing_postal_code?: string | null; billing_city?: string | null; billing_country_code?: string | null; tax_id?: string | null };
export type SummaryRow = InvoiceRecord & { organization: InvoiceOrganization };

const A4: [number, number] = [595.28, 841.89];
const dark = rgb(0.035, 0.075, 0.13); const muted = rgb(0.38, 0.43, 0.5); const line = rgb(0.86, 0.89, 0.92);
const clean = (value: unknown) => String(value ?? "").normalize("NFC").replace(/[–—]/g, "-").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[^\x20-\xFF€]/g, "?");
const money = (amount: number, currency = "eur") => new Intl.NumberFormat("de-AT", { style: "currency", currency: currency.toUpperCase(), minimumFractionDigits: 2 }).format(amount / 100).replace(/[\u00A0\u202F]/g, " ");
const date = (value?: string | null) => value ? new Intl.DateTimeFormat("de-AT", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Europe/Vienna" }).format(new Date(value)) : "-";
const taxLabel = (value: string, rate: number) => value === "domestic" ? `${rate}% USt. Österreich` : value === "eu_reverse_charge" ? "Reverse Charge" : value === "export" ? "Ausfuhr / steuerfrei" : "Standardbesteuerung";
const hex = (value: string) => { const match = /^#([0-9a-f]{6})$/i.exec(value); const code = match?.[1] ?? "67e8f9"; return rgb(parseInt(code.slice(0, 2), 16) / 255, parseInt(code.slice(2, 4), 16) / 255, parseInt(code.slice(4), 16) / 255); };

function wrap(text: string, font: PDFFont, size: number, width: number) {
  const words = clean(text).split(/\s+/).filter(Boolean); const lines: string[] = []; let current = "";
  for (const word of words) { const candidate = current ? `${current} ${word}` : word; if (font.widthOfTextAtSize(candidate, size) <= width) current = candidate; else { if (current) lines.push(current); current = word; } }
  if (current) lines.push(current); return lines.length ? lines : [""];
}
function text(page: PDFPage, value: unknown, x: number, y: number, font: PDFFont, size = 10, color = dark) { page.drawText(clean(value), { x, y, font, size, color }); }
function right(page: PDFPage, value: unknown, rightX: number, y: number, font: PDFFont, size = 10, color = dark) { const valueText = clean(value); text(page, valueText, rightX - font.widthOfTextAtSize(valueText, size), y, font, size, color); }

export async function generateInvoicePdf(input: { invoice: InvoiceRecord; organization: InvoiceOrganization; settings: InvoiceSettings; productName?: string | null; logoBytes?: Uint8Array | null; logoMime?: string | null }) {
  const pdf = await PDFDocument.create(); const page = pdf.addPage(A4); const regular = await pdf.embedFont(StandardFonts.Helvetica); const bold = await pdf.embedFont(StandardFonts.HelveticaBold); const accent = hex(input.settings.accent_color); const { invoice, organization, settings } = input;
  page.drawRectangle({ x: 0, y: 825, width: A4[0], height: 17, color: accent });
  let logoDrawn = false;
  if (input.logoBytes?.length) { try { const image = input.logoMime === "image/png" ? await pdf.embedPng(input.logoBytes) : await pdf.embedJpg(input.logoBytes); const scaled = image.scale(Math.min(78 / image.width, 46 / image.height, 1)); const x = settings.logo_position === "center" ? (A4[0] - scaled.width) / 2 : settings.logo_position === "right" ? 535 - scaled.width : 60; page.drawImage(image, { x, y: 750, width: scaled.width, height: scaled.height }); logoDrawn = true; } catch { logoDrawn = false; } }
  const brandX = settings.logo_position === "left" && logoDrawn ? 150 : 60;
  text(page, settings.company_name, brandX, 786, bold, 22); if (settings.slogan) text(page, settings.slogan, brandX, 767, regular, 9, muted);
  right(page, "RECHNUNG", 535, 786, bold, 23, dark); right(page, invoice.invoice_number ?? invoice.id, 535, 765, regular, 10, muted);
  page.drawLine({ start: { x: 60, y: 735 }, end: { x: 535, y: 735 }, thickness: 1, color: line });
  const sender = [settings.legal_name || settings.company_name, settings.address, [settings.postal_code, settings.city].filter(Boolean).join(" "), settings.country_code].filter(Boolean).join(" · ");
  text(page, sender, 60, 718, regular, 7.5, muted); text(page, "RECHNUNG AN", 60, 688, bold, 8, muted);
  text(page, organization.legal_name || organization.name, 60, 668, bold, 11); let customerY = 652;
  for (const value of [organization.billing_address, [organization.billing_postal_code, organization.billing_city].filter(Boolean).join(" "), organization.billing_country_code, organization.billing_email, organization.tax_id ? `UID: ${organization.tax_id}` : null].filter(Boolean)) { text(page, value, 60, customerY, regular, 9.5); customerY -= 15; }
  const issued = invoice.issued_at ? new Date(invoice.issued_at) : null; const due = issued ? new Date(issued.getTime() + settings.payment_terms_days * 86_400_000).toISOString() : null;
  text(page, "Rechnungsdatum", 360, 688, regular, 9, muted); right(page, date(invoice.issued_at), 535, 688, bold, 9);
  text(page, "Leistungszeitraum", 360, 670, regular, 9, muted); right(page, date(invoice.issued_at), 535, 670, bold, 9);
  text(page, "Fällig am", 360, 652, regular, 9, muted); right(page, invoice.status === "paid" ? "Bereits bezahlt" : date(due), 535, 652, bold, 9);
  page.drawRectangle({ x: 60, y: 550, width: 475, height: 34, color: dark }); text(page, "Beschreibung", 72, 562, bold, 9, rgb(1, 1, 1)); right(page, "Netto", 400, 562, bold, 9, rgb(1, 1, 1)); right(page, "USt.", 470, 562, bold, 9, rgb(1, 1, 1)); right(page, "Gesamt", 523, 562, bold, 9, rgb(1, 1, 1));
  const description = input.productName ? `TapRadar ${input.productName} - Abonnement` : "TapRadar Abonnement"; text(page, description, 72, 520, bold, 10); text(page, "Digitale Kundenbindungsplattform", 72, 503, regular, 8.5, muted); right(page, money(invoice.subtotal_amount, invoice.currency), 400, 514, regular, 9.5); right(page, money(invoice.tax_amount, invoice.currency), 470, 514, regular, 9.5); right(page, money(invoice.total_amount, invoice.currency), 523, 514, bold, 9.5); page.drawLine({ start: { x: 60, y: 486 }, end: { x: 535, y: 486 }, thickness: 1, color: line });
  const taxRate = invoice.subtotal_amount > 0 ? Math.round(invoice.tax_amount / invoice.subtotal_amount * 100) : 0;
  text(page, taxLabel(invoice.vat_treatment, taxRate), 60, 457, regular, 8.5, muted); text(page, "Zwischensumme", 355, 457, regular, 9, muted); right(page, money(invoice.subtotal_amount, invoice.currency), 535, 457, regular, 9); text(page, "Umsatzsteuer", 355, 438, regular, 9, muted); right(page, money(invoice.tax_amount, invoice.currency), 535, 438, regular, 9); page.drawRectangle({ x: 340, y: 390, width: 195, height: 34, color: accent }); text(page, "Gesamt", 355, 402, bold, 11); right(page, money(invoice.total_amount, invoice.currency), 523, 402, bold, 11);
  if (invoice.vat_treatment === "eu_reverse_charge") for (const [index, row] of wrap("Steuerschuldnerschaft des Leistungsempfängers (Reverse Charge).", regular, 8.5, 470).entries()) text(page, row, 60, 360 - index * 13, regular, 8.5, muted);
  if (settings.iban) { text(page, "ZAHLUNGSINFORMATION", 60, 315, bold, 8, muted); text(page, `${settings.bank_name ? `${settings.bank_name} · ` : ""}IBAN ${settings.iban}${settings.bic ? ` · BIC ${settings.bic}` : ""}`, 60, 295, regular, 9.5); }
  if (settings.footer_text) for (const [index, row] of wrap(settings.footer_text, regular, 9, 475).slice(0, 3).entries()) text(page, row, 60, 250 - index * 14, regular, 9, muted);
  page.drawLine({ start: { x: 60, y: 105 }, end: { x: 535, y: 105 }, thickness: 1, color: line });
  const footer = [[settings.legal_name || settings.company_name, settings.registration_number ? `FN: ${settings.registration_number}` : null, settings.tax_id ? `UID: ${settings.tax_id}` : null].filter(Boolean).join(" · "), [settings.address, settings.postal_code, settings.city, settings.country_code].filter(Boolean).join(" · "), [settings.email, settings.phone, settings.website].filter(Boolean).join(" · ")].filter(Boolean);
  footer.forEach((row, index) => text(page, row, 60, 87 - index * 13, regular, 7.5, muted)); right(page, "Seite 1 / 1", 535, 61, regular, 7.5, muted);
  return pdf.save();
}

export async function generateMonthlySummaryPdf(input: { month: string; rows: SummaryRow[]; settings: InvoiceSettings }) {
  const pdf = await PDFDocument.create(); const regular = await pdf.embedFont(StandardFonts.Helvetica); const bold = await pdf.embedFont(StandardFonts.HelveticaBold); const accent = hex(input.settings.accent_color); const paid = input.rows.filter(row => row.status === "paid"); const totals = paid.reduce((sum, row) => ({ net: sum.net + row.subtotal_amount, tax: sum.tax + row.tax_amount, gross: sum.gross + row.total_amount }), { net: 0, tax: 0, gross: 0 }); let page: PDFPage; let y = 0;
  const addPage = () => { page = pdf.addPage(A4); page.drawRectangle({ x: 0, y: 825, width: A4[0], height: 17, color: accent }); text(page, input.settings.company_name, 50, 790, bold, 17); text(page, `Monatsabrechnung ${input.month}`, 50, 760, bold, 24); text(page, `Erstellt am ${date(new Date().toISOString())} · nur bezahlte Rechnungen in Summen`, 50, 740, regular, 8.5, muted); page.drawRectangle({ x: 50, y: 675, width: 495, height: 44, color: rgb(0.95, 0.97, 0.98) }); text(page, `Netto ${money(totals.net)}`, 65, 693, bold, 11); text(page, `USt. ${money(totals.tax)}`, 230, 693, bold, 11); text(page, `Brutto ${money(totals.gross)}`, 390, 693, bold, 11); y = 645; text(page, "Rechnung / Datum", 50, y, bold, 8); text(page, "Unternehmen", 180, y, bold, 8); right(page, "Netto", 395, y, bold, 8); right(page, "USt.", 465, y, bold, 8); right(page, "Brutto", 545, y, bold, 8); y -= 14; page.drawLine({ start: { x: 50, y }, end: { x: 545, y }, thickness: 1, color: line }); y -= 18; };
  addPage();
  for (const row of input.rows) { if (y < 85) addPage(); text(page!, `${row.invoice_number ?? row.id} · ${date(row.issued_at)}`, 50, y, regular, 7.5); text(page!, clean(row.organization.legal_name || row.organization.name).slice(0, 34), 180, y, regular, 7.5); right(page!, money(row.subtotal_amount, row.currency), 395, y, regular, 7.5); right(page!, money(row.tax_amount, row.currency), 465, y, regular, 7.5); right(page!, money(row.total_amount, row.currency), 545, y, row.status === "paid" ? bold : regular, 7.5, row.status === "paid" ? dark : muted); y -= 19; }
  const pages = pdf.getPages(); pages.forEach((current, index) => { current.drawLine({ start: { x: 50, y: 55 }, end: { x: 545, y: 55 }, thickness: 1, color: line }); text(current, `Rechnungen: ${input.rows.length} · bezahlt: ${paid.length}`, 50, 38, regular, 7.5, muted); right(current, `Seite ${index + 1} / ${pages.length}`, 545, 38, regular, 7.5, muted); });
  return pdf.save();
}

export function generateMonthlyCsv(month: string, rows: SummaryRow[]) {
  const escape = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const header = ["Monat", "Rechnungsnummer", "Datum", "Unternehmen", "UID", "Land", "Steuerart", "Status", "Währung", "Netto", "USt.", "Brutto"];
  const lines = rows.map(row => [month, row.invoice_number ?? row.id, date(row.issued_at), row.organization.legal_name || row.organization.name, row.organization.tax_id ?? "", row.customer_country_code ?? "", row.vat_treatment, row.status, row.currency.toUpperCase(), (row.subtotal_amount / 100).toFixed(2).replace(".", ","), (row.tax_amount / 100).toFixed(2).replace(".", ","), (row.total_amount / 100).toFixed(2).replace(".", ",")].map(escape).join(";"));
  return `\uFEFF${header.map(escape).join(";")}\n${lines.join("\n")}\n`;
}
