import DinerMenu from "./DinerMenu";
import MenuItem from "./MenuItem";
import PancakeHouseMenu from "./PancakeHouseMenu";

const pancakeHouseMenu = new PancakeHouseMenu();
const breakfastItems = pancakeHouseMenu.getMenuItems();
// console.log('Pancake House Menu', breakfastItems);


const dinerMenu: DinerMenu = new DinerMenu();
// const lunchItems: MenuItem[] = dinerMenu.getMenuItems();
const lunchItems: Iterator<MenuItem> = dinerMenu.createIterator()
// console.log('Diner Menu', lunchItems);

// for (const item of breakfastItems) {
//   console.log(item.toString());
// }

for (const item in lunchItems) {
  console.log(item.toString());
}