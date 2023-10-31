import Command from "./Command";
import TextEditor from "./TextEditor";

export default class DeleteTextCommand implements Command {
  private backupText: string;
  private textEditor: TextEditor;
  private length: number;

  constructor(length: number, textEditor: TextEditor) {
    this.textEditor = textEditor;
    this.length = length;
    this.backupText = "";

  }

  public execute(): void {
    this.backupText = this.textEditor.getText();
    this.textEditor.deleteText(this.length);
  }

  public undo(): void {
    this.textEditor.setText(this.backupText);
  }

  public redo(): void {
    this.execute();
  }
}