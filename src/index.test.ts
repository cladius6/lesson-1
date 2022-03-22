import { TurboNumber } from "./index";

describe("TurboNumber()", function () {
  let tn: TurboNumber;
  beforeEach(() => {
    tn = new TurboNumber(10);
  });
  it("Should returns '5', when divide 10 and 2.", () => {
    expect(tn.divide(2).result()).toBe(5);
  });
  it("Should returns '6', when substract 10 and 4.", () => {
    expect(tn.substract(4).result()).toBe(6);
  });

  it("Should throw error when try to divide by zero.", () => {
    expect(() => tn.divide(0)).toThrow('Cannot divide by zero.');
  });

  it("Should throw error when number is overflow.", () => {
    const a = new TurboNumber(Number.MAX_VALUE);
    expect(() => a.substract(1)).toThrow('Number overflow.');
  });

  it("Failing test.", () => {
    expect(tn.substract(5).divide(-3).result()).toBe(-2);
  });
});
