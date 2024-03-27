import FileSystemItem from "./FitelSystemItem";

export default class File implements FileSystemItem {
  name: string;
  size: number;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
  add(fileSystemItem: FileSystemItem): void {
    throw new Error("Method not implemented.");
  }
  remove(fileSystemItem: FileSystemItem): void {
    throw new Error("Method not implemented.");
  }
  getChild(index: number): FileSystemItem {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
}
