import Command from "./Command";
import TextEditor from "./TextEditor";

export default class AddTextCommand implements Command {
  private textEditor: TextEditor;
  private text: string;
  private backupText: string = "";

  constructor(text: string, textEditor: TextEditor) {
    this.textEditor = textEditor;
    this.text = text;
  }

  public execute(): void {
    this.backupText = this.textEditor.getText();
    this.textEditor.addText(this.text);
  }

  public undo(): void {
    this.textEditor.setText(this.backupText);
  }

  public redo(): void {
    this.execute();
  }
}
