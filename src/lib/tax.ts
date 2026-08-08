export const euCountryCodes = new Set(["AT", "BE", "BG", "HR", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]);

export type VatTreatment = "domestic" | "eu_reverse_charge" | "export" | "standard";

export function inferVatTreatment(countryCode: string, taxId?: string | null): VatTreatment {
  const country = countryCode.toUpperCase();
  if (country === "AT") return "domestic";
  if (euCountryCodes.has(country)) return taxId?.trim() ? "eu_reverse_charge" : "standard";
  return "export";
}

export function vatLabel(treatment: VatTreatment) {
  if (treatment === "domestic") return "20 % österreichische Umsatzsteuer";
  if (treatment === "eu_reverse_charge") return "0 % – Reverse Charge nach gültiger EU-UID";
  if (treatment === "export") return "0 % – Leistung an Unternehmen außerhalb der EU";
  return "20 % Umsatzsteuer bis zur steuerlichen Prüfung";
}

export const countryOptions = [
  ["AT", "Österreich"], ["DE", "Deutschland"], ["CH", "Schweiz"], ["IT", "Italien"],
  ["CZ", "Tschechien"], ["SK", "Slowakei"], ["HU", "Ungarn"], ["SI", "Slowenien"],
  ["HR", "Kroatien"], ["FR", "Frankreich"], ["NL", "Niederlande"], ["BE", "Belgien"],
  ["PL", "Polen"], ["ES", "Spanien"], ["PT", "Portugal"], ["RO", "Rumänien"],
  ["BG", "Bulgarien"], ["DK", "Dänemark"], ["SE", "Schweden"], ["FI", "Finnland"],
  ["IE", "Irland"], ["GB", "Vereinigtes Königreich"], ["US", "USA"], ["TR", "Türkei"],
] as const;
