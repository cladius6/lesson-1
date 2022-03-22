import { TurboNumber } from "./index";

describe("TurboNumber()", () => {
  it("10 divide by 2 returns 5.", () => {
    const tn = new TurboNumber(10)
    tn.divide(2);
    expect(tn.result()).toBe(5);
  });

  it("10 subtract by 2 returns 8.", () => {
    const tn = new TurboNumber(10)
    tn.subtract(2);
    expect(tn.result()).toBe(8);
  });

  it("Throw error when divide by 0.", () => {
    const tn = new TurboNumber(10)
    expect(() => tn.subtract(0)).toThrow('Cannot divide by 0.');
  });

  it("Method chaining should work and returns correct result.", () => {
    expect(new TurboNumber(17).subtract(5).divide(-3).result()).toBe(-4);
  });
});
