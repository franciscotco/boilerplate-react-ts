import { describe, expect, test } from '@jest/globals';
import { MESSAGES } from "./messages";

describe("Locales", () => {
  test("key matching fr & en", () => {
    const { fr, en } = MESSAGES;

    Object.keys(fr).forEach((frKey) => {
      expect(typeof en[frKey] === "string").toBe(true);
    });
  });
});
