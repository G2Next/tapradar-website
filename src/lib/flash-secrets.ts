export const STAMP_TOKEN_COOKIE = "tapradar_new_stamp_token";
export const INVITATION_TOKEN_COOKIE = "tapradar_new_invitation_token";
export const STAFF_PIN_COOKIE = "tapradar_new_staff_pin";

export const flashSecretCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 5 * 60,
  priority: "high" as const,
};
