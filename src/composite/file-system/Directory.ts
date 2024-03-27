import File from "./File";
import FileSystemItem from "./FileSystemItem";

export default class Directory implements FileSystemItem {
  name: string;
  private children: FileSystemItem[] = [];

  constructor(name: string) {
    this.name = name;
  }
  print(indentation: number = 0): void {
    console.log(`${' '.repeat(indentation)}Directory: ${this.getName()} (${this.getSize()} bytes)`);
    for (const child of this.children) {
        if (child instanceof Directory) {
            (child as Directory).print(indentation + 2);
        } else {
            console.log(`${' '.repeat(indentation + 2)}File: ${(child as File).getName()} (${(child as File).getSize()} bytes)`);
        }
    }
  }
  add(fileSystemItem: FileSystemItem): void {
    this.children.push(fileSystemItem);
  }
  remove(fileSystemItem: FileSystemItem): void {
    const index = this.children.indexOf(fileSystemItem);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
  getChild(index: number): FileSystemItem {
    return this.children[index];
  }
  getSize(): number {
    let totalSize = 0;
    for (const child of this.children) {
      totalSize += child.getSize();
    }
    return totalSize;
  }
  getName(): string {
    return this.name;
  }
}
