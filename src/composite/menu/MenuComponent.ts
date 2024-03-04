export default abstract class MenuComponent {
  add(menuComponent: MenuComponent): void {
    throw new Error("Unsupported Operation");
  }

  remove(menuComponent: MenuComponent): void {
    throw new Error("Unsupported Operation");
  }

  getChild(i: number): MenuComponent {
    throw new Error("Unsupported Operation");
  }

  getName(): string {
    throw new Error("Unsupported Operation");
  }

  getDescription(): string {
    throw new Error("Unsupported Operation");
  }

  getPrice(): number {
    throw new Error("Unsupported Operation");
  }

  isVegetarian(): boolean {
    throw new Error("Unsupported Operation");
  }

  print(): void {
    throw new Error("Unsupported Operation");
  }

  createIterator(): Iterator<MenuComponent> {
    throw new Error("Unsupported Operation");
  }
}