import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;
  cafeMenu: Menu;

  constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
    this.cafeMenu = cafeMenu;
  }

  printMenu(): void {
    const pancakeIterator: Iterator<MenuItem> =
      this.pancakeHouseMenu.createIterator();
    const dinerIterator: Iterator<MenuItem> = this.dinerMenu.createIterator();
    const cafeIterator: Iterator<MenuItem> = this.cafeMenu.createIterator();

    console.log("MENU\n----\nBREAKFAST");
    this.printMenuItems(pancakeIterator);
    console.log("\nLUNCH");
    this.printMenuItems(dinerIterator);
    console.log("\nDINNER");
    this.printMenuItems(cafeIterator);
  }

  private printMenuItems(iterator: Iterator<MenuItem>): void {
    let result = iterator.next();
    while (!result.done) {
      const menuItem: MenuItem = result.value;
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      );
      result = iterator.next();
    }
  }
}
