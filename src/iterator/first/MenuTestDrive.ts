import CaffeMenu from "./CaffeMenu";
import DinerMenu from "./DinerMenu";
import PancakeHouseMenu from "./PancakeHouseMenu";
import Waitress from "./Waitress";

export default class MenuTestDrive {
  static main(): void {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu(); // this is the only one that need a specific iterator class built in since it's an array, unlike the other two, pancakeHouseMenu and caffeMenu that are a set and a map, respectively
    const caffeMenu = new CaffeMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinerMenu, caffeMenu);
    waitress.printMenu();
  }
}

MenuTestDrive.main();
