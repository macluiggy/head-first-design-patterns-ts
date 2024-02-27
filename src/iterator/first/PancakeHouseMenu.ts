import MenuItem from "./MenuItem";
import PancakeHouseMenuIterator from "./PancakeHouseMenuIterator";

export default class PancakeHouseMenu {
  menuItems: Set<MenuItem> = new Set();
  constructor() {
    this.addItem('K&B\'s Pancake Breakfast', 'Pancakes with scrambled eggs, and toast', true, 2.99);
    this.addItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99);
    this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49);
    this.addItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59);
  }
  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.add(menuItem);
  }
  getMenuItems(): Set<MenuItem> {
    return this.menuItems;
  }
  // other menu methods here
  createIterator(): Iterator<MenuItem> {
    // const iterator = new PancakeHouseMenuIterator(this.menuItems);
    // return iterator;
    const iterator = this.menuItems.values();
    return iterator;
  }
}