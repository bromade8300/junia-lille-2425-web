import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "./calcul";

describe("Addition", () => {
  it("returns the sum of 1 and 3, should be 4", () => {
    expect(add(1, 4)).toBe(5);
  });

  [
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 2, expected: 4 },
    { a: 3, b: 3, expected: 6 },
    { a: 4, b: 0, expected: 4 },
  ].forEach(({ a, b, expected }) => {
    it(`returns the sum of ${a} and ${b}`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });
});

describe("Subtraction", () => {
  it("returns the difference of 1 and 3, should be -2", () => {
    expect(subtract(1, 3)).toBe(-2);
  });
});
