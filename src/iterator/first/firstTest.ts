import DinerMenu from "./DinerMenu";
import MenuItem from "./MenuItem";
import PancakeHouseMenu from "./PancakeHouseMenu";

const pancakeHouseMenu = new PancakeHouseMenu();
const breakfastItems = pancakeHouseMenu.getMenuItems();

const dinerMenu: DinerMenu = new DinerMenu();
const lunchItems: MenuItem[] = dinerMenu.getMenuItems();