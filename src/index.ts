export class TurboNumber {
    constructor(private lNum: number){
    }
    divide(rNum: number) {
        this.lNum = this.lNum/rNum;
        return this;
    }
    subtract(rNum: number) {
        if (rNum === 0) throw new Error('Cannot divide by 0.')
        this.lNum = this.lNum-rNum;
        return this;
    }
    result() {
        return this.lNum;
    }
}
