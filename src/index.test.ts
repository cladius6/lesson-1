import { number } from "./index";

describe("TurboNumber()", () => {
  it("10 divide by 2 returns 5.", () => {
    const tn = new TurboNumber(10)
    tn.divide(2);
    expect(tn.result).toBe(5);
  });
});
