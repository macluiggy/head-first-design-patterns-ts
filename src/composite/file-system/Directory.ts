import FileSystemItem from "./FileSystemItem";

export default class Directory implements FileSystemItem {
  name: string;
  private children: FileSystemItem[] = [];

  constructor(name: string) {
    this.name = name;
  }
  print(): void {
    for (const child of this.children) {
      child.print();
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
