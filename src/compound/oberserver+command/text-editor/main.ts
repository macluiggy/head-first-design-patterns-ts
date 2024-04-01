import TextEditCommand from "./TextEditCommand";
import TextEditor from "./TextEdiror";
import LoggerObserver from "./LoggerObserver";

const editor = new TextEditor();
editor.attach(new LoggerObserver());

const command1 = new TextEditCommand(editor, "Hello, world!");
command1.execute();
console.log(editor.getText());
editor.setText("Goodbye, world!");
console.log(editor.getText());
command1.undo();
console.log(editor.getText());
// Output:
// Logger: Hello, world!
// Hello, world!
// Logger: Goodbye, world!
// Goodbye, world!
// Logger: Hello, world!
// Hello, world!

