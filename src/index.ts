export class TurboNumber {
  private x: number;
  private result: number;
  constructor(x: number) {
    this.x = x;
    this.result = 0;
  }
  substract(y: number): void{
    this.result = this.x-y;
  }
  divide(y: number): void{
    if (y == 0) throw 'Cannot divide by zero.';
    this.result = this.x/y;
  }
  public getResult(): number {
    return this.result;
  }
}