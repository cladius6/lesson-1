import { TurboNumber } from "./index";

describe("TurboNumber()", () => {
  let tn: TurboNumber;
  beforeEach(() => {
    tn = new TurboNumber(10);
  });
  it("10 divide by 2 returns 5.", () => {
    expect(tn.divide(2).result()).toBe(5);
  });

  it("10 subtract by 2 returns 8.", () => {
    expect(tn.subtract(2).result()).toBe(8);
  });

  it("Throw error when divide by 0.", () => {
    expect(() => tn.subtract(0)).toThrow('Cannot divide by 0.');
  });

  it("Method chaining should work and returns correct result.", () => {
    expect(new TurboNumber(17).subtract(5).divide(-3).result()).toBe(-4);
  });
});
