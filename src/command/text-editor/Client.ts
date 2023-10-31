import AddTextCommand from "./AddTextCommand";
import DeleteTextCommand from "./DeleteTextCommand";
import Invoker from "./Invoker";
import TextEditor from "./TextEditor";

const textBuffer = new TextEditor();
const invoker = new Invoker();

// Add some text
const addCommand1 = new AddTextCommand("Hello ", textBuffer);
invoker.storeAndExecute(addCommand1);
console.log(textBuffer.getText()); // Outputs: Hello

// Add more text
const addCommand2 = new AddTextCommand("World!", textBuffer);
invoker.storeAndExecute(addCommand2);
console.log(textBuffer.getText()); // Outputs: Hello World!

// Undo the last add
invoker.undo();
console.log(textBuffer.getText()); // Outputs: Hello

// Delete some text
const deleteCommand = new DeleteTextCommand(3, textBuffer);
invoker.storeAndExecute(deleteCommand);
console.log(textBuffer.getText()); // Outputs: Hel

// Undo the delete
invoker.undo();
console.log(textBuffer.getText()); // Outputs: Hello
