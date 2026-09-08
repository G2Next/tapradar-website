export const AUTH_PERSISTENCE_COOKIE = "tapradar_auth_persistence";
export const AUTH_PERSISTENCE_MAX_AGE = 60 * 60 * 24 * 400;

export function withoutCookiePersistence<T extends { expires?: Date; maxAge?: number }>(options: T): Omit<T, "expires" | "maxAge"> {
  const sessionOptions = { ...options };
  delete sessionOptions.expires;
  delete sessionOptions.maxAge;
  return sessionOptions;
}
