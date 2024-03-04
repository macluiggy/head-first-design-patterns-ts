import MenuComponent from "./MenuComponent";

export default class Waitress {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  printMenu(): void {
    this.allMenus.print();
  }
}