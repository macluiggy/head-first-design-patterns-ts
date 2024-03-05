export default class BookItem {
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
  getTitle(): string {
    return this.title;
  }
  getDescription(): string {
    return this.description;
  }
  toString(): string {
    return `${this.title}:
     ${this.description}`;
  }
}
