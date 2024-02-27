import CaffeMenuIterator from "./CaffeMenuIterator";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default class CaffeMenu implements Menu {
  menuItems: Map<string, MenuItem> = new Map();

  constructor() {
    this.addItem('Veggie Burger and Air Fries', 'Veggie burger on a whole wheat bun, lettuce, tomato, and fries', true, 3.99);
    this.addItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69);
    this.addItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    this.menuItems.set(name, new MenuItem(name, description, vegetarian, price));
  }

  getMenuItems(): Map<string, MenuItem> {
    return this.menuItems;
  }

  createIterator(): Iterator<MenuItem> {
    // const iterator = new CaffeMenuIterator(this.menuItems);
    // return iterator;
    const iterator = this.menuItems.values();
    return iterator;
  }
}