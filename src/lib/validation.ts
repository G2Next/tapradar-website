export function requiredText(value: FormDataEntryValue | null, maxLength = 200) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export function optionalText(value: FormDataEntryValue | null, maxLength = 1000) {
  const text = requiredText(value, maxLength);
  return text || null;
}

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function safeNextPath(value: string | null, fallback = "/dashboard") {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return fallback;
  try {
    const url = new URL(value, "https://tapradar.invalid");
    return url.origin === "https://tapradar.invalid" ? `${url.pathname}${url.search}${url.hash}` : fallback;
  } catch {
    return fallback;
  }
}

export function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
