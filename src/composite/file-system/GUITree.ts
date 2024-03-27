import File from "./File";
import Directory from "./Directory";
import FileSystemItem from "./FileSystemItem";

export default class GUITree {
  private root: Directory;

  constructor() {
    this.root = new Directory("Root");
  }

  addFile(name: string, size: number, directoryName: string = "Root"): void {
    const directory = this.findDirectory(directoryName);
    if (directory) {
      directory.add(new File(name, size));
    } else {
      console.log(`Directory ${directoryName} not found`);
    }
  }

  addDirectory(name: string, directoryName: string = "Root"): void {
    const directory = this.findDirectory(directoryName);
    if (directory) {
      directory.add(new Directory(name));
    } else {
      console.log(`Directory ${directoryName} not found`);
    }
  }

  findDirectory(
    name: string,
    directory: Directory = this.root
  ): Directory | null {
    if (directory.getName() === name) {
      return directory;
    }
    for (const child of directory["children"]) {
      if (child instanceof Directory) {
        const found = this.findDirectory(name, child);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  printTree(): void {
    this.root.print();
  }

  getName(): string {
    return this.root.getName();
  }

  getSize(): number {
    return this.root.getSize();
  }
}

const guiTree = new GUITree();
guiTree.addFile("file1.txt", 100);
guiTree.addDirectory("subFolder");
guiTree.addFile("file2.txt", 200, "subFolder");
guiTree.addFile("file3.txt", 150, "subFolder");

guiTree.printTree();
console.log(`Total Size: ${guiTree.getSize()} bytes`);
