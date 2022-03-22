export class TurboNumber {
  private x: number;
  res: number;
  constructor(x: number) {
    this.x = x;
    this.res = 0;
  }
  substract(y: number): TurboNumber{
    this.res = this.x-y;
    if (this.x === Number.MAX_VALUE && this.res < 0) throw new Error('Number overflow.');
    return this
  }
  divide(y: number): TurboNumber{
    if (y == 0) throw new Error('Cannot divide by zero.');
    this.res = this.x/y;
    return this
  }
  result(): number{
    return this.res;
  }
}