import sharp from "sharp";

const imageFormats: Record<string, string> = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/webp": "webp",
};

const riskyPdfFeatures = /\/(?:JavaScript|JS|OpenAction|AA|Launch|EmbeddedFile|RichMedia)\b/i;

export async function validateUploadedFile(bytes: Uint8Array, mimeType: string) {
  const expectedFormat = imageFormats[mimeType];
  if (expectedFormat) {
    const metadata = await sharp(bytes, { failOn: "error", limitInputPixels: 40_000_000 }).metadata();
    if (metadata.format !== expectedFormat || !metadata.width || !metadata.height) throw new Error("invalid-image");
    if ((metadata.pages ?? 1) !== 1) throw new Error("animated-image-not-allowed");
    return;
  }

  if (mimeType === "application/pdf") {
    const header = Buffer.from(bytes.subarray(0, Math.min(bytes.length, 8))).toString("latin1");
    const tail = Buffer.from(bytes.subarray(Math.max(0, bytes.length - 2048))).toString("latin1");
    const content = Buffer.from(bytes).toString("latin1");
    if (!header.startsWith("%PDF-") || !tail.includes("%%EOF")) throw new Error("invalid-pdf");
    if (riskyPdfFeatures.test(content)) throw new Error("active-pdf-content-not-allowed");
    return;
  }

  throw new Error("unsupported-file-type");
}
