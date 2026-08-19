import { randomInt } from "crypto";

export const STAFF_PIN_LENGTH = 6;

export function generateStaffPin() {
  return randomInt(0, 10 ** STAFF_PIN_LENGTH).toString().padStart(STAFF_PIN_LENGTH, "0");
}

export function normalizeBusinessCode(value: unknown) {
  return typeof value === "string" ? value.trim().toUpperCase() : "";
}

export function isBusinessCode(value: string) {
  return /^[A-Z]{3}[0-9]{3}$/.test(value);
}

export function isStaffPin(value: string) {
  return /^[0-9]{6}$/.test(value);
}
