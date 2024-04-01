import TextEditor from "./TextEdiror";

export default class TextEditCommand {
  private editor: TextEditor;
  private oldText: string;
  private newText: string;


  constructor(editor: TextEditor, newText: string) {
    this.editor = editor;
    this.newText = newText;
  }

  execute(): void {
    this.oldText = this.editor.getText();
    this.editor.setText(this.newText);
  }

  undo(): void {
    this.editor.setText(this.oldText);
  }
}