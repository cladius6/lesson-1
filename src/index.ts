export class TurboNumber {
    constructor(private lNum: number){
    }
    divide(rNum: number) {
        this.lNum = this.lNum/rNum;
    }
    result() {
        return this.lNum;
    }
}
