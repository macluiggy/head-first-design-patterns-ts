import DinerMenu from "./DinerMenu";
import PancakeHouseMenu from "./PancakeHouseMenu";
import Waitress from "./Waitress";

export default class MenuTestDrive {
  static main(): void {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
    waitress.printMenu();
  }
}
