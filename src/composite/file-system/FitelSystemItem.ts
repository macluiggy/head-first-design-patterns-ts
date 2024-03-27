export default interface FileSystemItem {
  name: string;
  size: number;
  print(): void;
  add(fileSystemItem: FileSystemItem): void;
  remove(fileSystemItem: FileSystemItem): void;
  getChild(index: number): FileSystemItem;
  getSize(): number;
  getName(): string;
}
