export default class TextEditor {
  private text: string = "";

  public addText(text: string): void {
    this.text += text;
  }

  public deleteText(length: number): void {
    this.text = this.text.slice(0, -length);
  }

  public getText(): string {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }
}
