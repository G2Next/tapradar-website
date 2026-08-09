import { describe, expect, it } from "vitest";
import { locationCreateSchema, offerCreateSchema, organizationPatchSchema } from "./schemas";

const hours = {
  monday: { closed: false as const, open: "09:00", close: "18:00" },
  tuesday: { closed: true as const },
  wednesday: { closed: true as const },
  thursday: { closed: true as const },
  friday: { closed: true as const },
  saturday: { closed: true as const },
  sunday: { closed: true as const },
};

describe("merchant API schemas", () => {
  it("normalizes a valid location country code", () => {
    const result = locationCreateSchema.parse({
      name: "Wien Mitte",
      address: "Landstraßer Hauptstraße 1",
      postal_code: "1030",
      city: "Wien",
      country_code: "at",
      latitude: 48.2,
      longitude: 16.37,
      opening_hours: hours,
    });
    expect(result.country_code).toBe("AT");
  });

  it("rejects invalid coordinates and unknown fields", () => {
    expect(locationCreateSchema.safeParse({
      name: "Wien Mitte",
      address: "Adresse 1",
      postal_code: "1030",
      city: "Wien",
      country_code: "AT",
      latitude: 120,
      longitude: 16.37,
      opening_hours: hours,
      organization_id: "attacker-controlled",
    }).success).toBe(false);
  });

  it("rejects coupon percentages above 100", () => {
    const result = offerCreateSchema.safeParse({
      title: "Sommerbonus",
      description: "Rabatt im August",
      offer_type: "gutschein",
      discount_type: "percentage",
      discount_value: 101,
    });
    expect(result.success).toBe(false);
  });

  it("does not allow plan or status changes through organization input", () => {
    expect(organizationPatchSchema.safeParse({ plan: "platinum" }).success).toBe(false);
    expect(organizationPatchSchema.safeParse({ status: "active" }).success).toBe(false);
  });
});
