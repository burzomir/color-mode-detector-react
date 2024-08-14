import { hello } from "./index";

describe("Example test", () => {
  it("should be true", () => {
    expect(hello("world")).toBe("Hello world!");
  });
});
