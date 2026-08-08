import { describe, expect, it } from "vitest";
import { validateUploadedFile } from "./file-security";

const pdf = (body = "") => new TextEncoder().encode(`%PDF-1.7\n${body}\n%%EOF`);

describe("validateUploadedFile", () => {
  it("accepts a basic PDF structure", async () => {
    await expect(validateUploadedFile(pdf("1 0 obj <<>> endobj"), "application/pdf")).resolves.toBeUndefined();
  });

  it("rejects active PDF content", async () => {
    await expect(validateUploadedFile(pdf("/OpenAction 1 0 R"), "application/pdf")).rejects.toThrow("active-pdf-content-not-allowed");
  });

  it("rejects a spoofed PDF", async () => {
    await expect(validateUploadedFile(new TextEncoder().encode("not a pdf"), "application/pdf")).rejects.toThrow("invalid-pdf");
  });
});
