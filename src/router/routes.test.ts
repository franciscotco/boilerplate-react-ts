import { routes } from "./routes";

describe("Routes", () => {
  test("order", () => {
    expect(routes[0]?.order).toBe(0);
  });
});
