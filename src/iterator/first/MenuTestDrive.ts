import CaffeMenu from "./CaffeMenu";
import DinerMenu from "./DinerMenu";
import PancakeHouseMenu from "./PancakeHouseMenu";
import Waitress from "./Waitress";

export default class MenuTestDrive {
  static main(): void {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const caffeMenu = new CaffeMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinerMenu, caffeMenu);
    waitress.printMenu();
  }
}

MenuTestDrive.main();
