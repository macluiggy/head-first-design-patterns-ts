import Menu from "./Menu";

export default class CaffeMenu implements Menu {
  menuItems: Map<string, any> = new Map();

  constructor() {
    this.addItem('Veggie Burger and Air Fries', 'Veggie burger on a whole wheat bun, lettuce, tomato, and fries', true, 3.99);
    this.addItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69);
    this.addItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    this.menuItems.set(name, { name, description, vegetarian, price });
  }

  getMenuItems(): Map<string, any> {
    return this.menuItems;
  }

  createIterator(): Iterator<any> {
    return this.menuItems.values();
  }
}