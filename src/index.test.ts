import { TurboNumber } from "./index";

describe("TurboNumber()", function () {
  it("Should returns '1', when divide 2 and 2.", () => {
    const a = new TurboNumber(2);

    a.divide(2);
    const res = a.getResult()
    expect(res).toBe(1);
  });
  it("Should returns '-1', when substract 3 and 4.", () => {
    const a = new TurboNumber(3);

    a.substract(4);

    const res = a.getResult();
    expect(res).toBe(-1);
  });

  it("Should throw error when try to divide by zero.", () => {
    const a = new TurboNumber(2);
    expect(() => a.divide(0)).toThrow('Cannot divide by zero.');
  });

  it("Should throw error when number is overflow.", () => {
    const a = new TurboNumber(Number.MAX_VALUE);
    expect(() => a.substract(10)).toThrow('Number overflow.');
  });
});
