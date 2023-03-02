import { MESSAGES } from "./messages";

describe("Locales", () => {
  test("key matching fr & en", () => {
    const { fr, en } = MESSAGES;

    Object.keys(fr).forEach((frKey) => {
      expect(en[frKey]).toBe(true);
    });
  });
});
