import { z } from "zod";

const nullableText = (maximum: number) => z.string().trim().max(maximum).nullable();
const optionalNullableText = (maximum: number) => nullableText(maximum).optional();
const uuidOrNull = z.uuid().nullable();

const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/);
const dayHours = z.discriminatedUnion("closed", [
  z.object({ closed: z.literal(true), open: time.optional(), close: time.optional() }).strict(),
  z.object({ closed: z.literal(false), open: time, close: time }).strict().refine((value) => value.open < value.close, {
    message: "Opening time must be before closing time.",
  }),
]);

export const openingHoursSchema = z.object({
  monday: dayHours,
  tuesday: dayHours,
  wednesday: dayHours,
  thursday: dayHours,
  friday: dayHours,
  saturday: dayHours,
  sunday: dayHours,
}).strict();

export const organizationPatchSchema = z.object({
  name: z.string().trim().min(2).max(120).optional(),
  legal_name: optionalNullableText(160),
  category: z.string().trim().min(2).max(80).optional(),
  registration_number: optionalNullableText(80),
  tax_id: optionalNullableText(80),
  billing_email: z.email().max(254).nullable().optional(),
  billing_address: z.string().trim().min(3).max(160).optional(),
  billing_postal_code: z.string().trim().min(2).max(20).optional(),
  billing_city: z.string().trim().min(2).max(100).optional(),
  billing_country_code: z.string().trim().regex(/^[A-Za-z]{2}$/).transform((value) => value.toUpperCase()).optional(),
  website: z.url().max(300).nullable().optional(),
  description: optionalNullableText(1500),
  logo_emoji: z.string().trim().min(1).max(10).optional(),
}).strict().refine((value) => Object.keys(value).length > 0, { message: "At least one field is required." });

export const locationCreateSchema = z.object({
  name: z.string().trim().min(2).max(120),
  address: z.string().trim().min(3).max(160),
  postal_code: z.string().trim().min(2).max(20),
  city: z.string().trim().min(2).max(100),
  country_code: z.string().trim().regex(/^[A-Za-z]{2}$/).transform((value) => value.toUpperCase()),
  phone: nullableText(40).default(null),
  email: z.email().max(254).nullable().default(null),
  timezone: z.string().trim().min(3).max(80).default("Europe/Vienna"),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  opening_hours: openingHoursSchema,
  public_status: z.enum(["draft", "open", "closed", "hidden"]).default("draft"),
  is_active: z.boolean().default(true),
}).strict();

export const locationPatchSchema = locationCreateSchema.partial().strict().refine(
  (value) => Object.keys(value).length > 0,
  { message: "At least one field is required." },
);

export const loyaltyCardCreateSchema = z.object({
  title: z.string().trim().min(2).max(120),
  reward_title: z.string().trim().min(2).max(160),
  earning_rule: z.string().trim().min(2).max(300),
  verification_instructions: z.string().trim().min(2).max(500),
  stamps_required: z.int().min(1).max(50),
  is_active: z.boolean().default(true),
  location_id: uuidOrNull.default(null),
}).strict();

export const loyaltyCardPatchSchema = loyaltyCardCreateSchema.partial().strict().refine(
  (value) => Object.keys(value).length > 0,
  { message: "At least one field is required." },
);

const nullableDateTime = z.iso.datetime({ offset: true }).nullable();

export const offerCreateSchema = z.object({
  title: z.string().trim().min(2).max(140),
  description: z.string().trim().min(2).max(1200),
  offer_type: z.enum(["aktion", "gutschein"]),
  discount_type: z.enum(["fixed", "percentage"]).nullable().default(null),
  discount_value: z.number().positive().max(10000).nullable().default(null),
  minimum_purchase_amount: z.number().nonnegative().max(1000000).nullable().default(null),
  redemption_code: z.string().trim().min(2).max(40).transform((value) => value.toUpperCase()).nullable().default(null),
  conditions: nullableText(800).default(null),
  starts_at: nullableDateTime.default(null),
  ends_at: nullableDateTime.default(null),
  is_active: z.boolean().default(true),
  location_id: uuidOrNull.default(null),
  media_asset_id: uuidOrNull.default(null),
}).strict().superRefine((value, context) => {
  if (value.starts_at && value.ends_at && value.starts_at >= value.ends_at) {
    context.addIssue({ code: "custom", path: ["ends_at"], message: "End must be after start." });
  }
  if (value.offer_type === "aktion" && (value.discount_type !== null || value.discount_value !== null)) {
    context.addIssue({ code: "custom", path: ["discount_type"], message: "Actions cannot define a discount." });
  }
  if (value.offer_type === "gutschein") {
    if (!value.discount_type || value.discount_value === null) {
      context.addIssue({ code: "custom", path: ["discount_type"], message: "Coupons require a discount." });
    }
    if (value.discount_type === "percentage" && value.discount_value !== null && value.discount_value > 100) {
      context.addIssue({ code: "custom", path: ["discount_value"], message: "Percentage cannot exceed 100." });
    }
  }
});

export const offerPatchSchema = z.object({
  title: z.string().trim().min(2).max(140).optional(),
  description: z.string().trim().min(2).max(1200).optional(),
  offer_type: z.enum(["aktion", "gutschein"]).optional(),
  discount_type: z.enum(["fixed", "percentage"]).nullable().optional(),
  discount_value: z.number().positive().max(10000).nullable().optional(),
  minimum_purchase_amount: z.number().nonnegative().max(1000000).nullable().optional(),
  redemption_code: z.string().trim().min(2).max(40).transform((value) => value.toUpperCase()).nullable().optional(),
  conditions: optionalNullableText(800),
  starts_at: nullableDateTime.optional(),
  ends_at: nullableDateTime.optional(),
  is_active: z.boolean().optional(),
  location_id: uuidOrNull.optional(),
  media_asset_id: uuidOrNull.optional(),
}).strict().refine((value) => Object.keys(value).length > 0, { message: "At least one field is required." });

export type OrganizationPatch = z.infer<typeof organizationPatchSchema>;
export type LocationCreate = z.infer<typeof locationCreateSchema>;
export type LoyaltyCardCreate = z.infer<typeof loyaltyCardCreateSchema>;
export type OfferCreate = z.infer<typeof offerCreateSchema>;
