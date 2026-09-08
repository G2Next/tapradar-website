export const SOCIAL_AUTH_PROVIDERS = {
  google: "google",
  apple: "apple",
} as const;

export type SocialAuthProvider = typeof SOCIAL_AUTH_PROVIDERS[keyof typeof SOCIAL_AUTH_PROVIDERS];
export const SOCIAL_AUTH_CALLBACK_ERROR = "callback";

