import { describe, expect, it } from "vitest";
import { authMessages } from "./auth";
import { socialAuthMessages } from "./social-auth";
import { locales } from "./config";

describe("auth translations", () => {
  it("provides complete copy for every supported locale", () => {
    expect(Object.keys(authMessages).sort()).toEqual([...locales].sort());
    for (const locale of locales) {
      const messages = authMessages[locale];
      expect(messages.metaTitle.trim()).not.toBe("");
      expect(messages.signIn.trim()).not.toBe("");
      expect(messages.createAccount.trim()).not.toBe("");
      expect(messages.signInFailed.trim()).not.toBe("");
      expect(messages.businessTitle.trim()).not.toBe("");
    }
  });

  it("provides social-login copy for every supported locale", () => {
    expect(Object.keys(socialAuthMessages).sort()).toEqual([...locales].sort());
    for (const locale of locales) {
      expect(socialAuthMessages[locale].continueWithGoogle.trim()).not.toBe("");
      expect(socialAuthMessages[locale].continueWithApple.trim()).not.toBe("");
      expect(socialAuthMessages[locale].orEmail.trim()).not.toBe("");
      expect(socialAuthMessages[locale].socialFailed.trim()).not.toBe("");
    }
  });
});
