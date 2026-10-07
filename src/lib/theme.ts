export const THEME_COOKIE = "tapradar_theme";
export type Theme = "light" | "dark";

export function parseTheme(value: string | undefined): Theme {
  return value === "dark" ? "dark" : "light";
}
