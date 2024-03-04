import MenuComponent from "./MenuComponent";

export default class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    const index = this.menuComponents.indexOf(menuComponent);
    if (index !== -1) {
      this.menuComponents.splice(index, 1);
    }
  }

  getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  print(): void {
    console.log(
      `\n${this.getName()}, ${this.getDescription()}\n---------------------`
    );

    for (const menuComponent of this.menuComponents) {
      menuComponent.print();
    }
  }

  createIterator(): Iterator<MenuComponent> {
    return this.menuComponents.values();
  }
}