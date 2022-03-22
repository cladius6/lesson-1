export class NokiaTexter {
  constructor(private text: string) {}
  squeeze() {
    // const formatedText = this.text.replace(/\s/g, "");
    const formatedText = this.text
      .split(" ")
      .map((word, i) => (i % 2 == 0 ? word.toUpperCase() : word.toLowerCase()))
      .join("");
    if (formatedText.length > 160) throw new Error("MessageTooLong");
    if (!/\s/g.test(this.text)) return this.text;
    return formatedText;
  }
}
