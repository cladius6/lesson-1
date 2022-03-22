export class NokiaTexter {
  constructor(private text: string) {}
  squeeze() {
    const formatedText = this.text.replace(/\s/g, "");
    if (formatedText.length > 160) throw new Error("MessageTooLong");
    return formatedText;
  }
}
