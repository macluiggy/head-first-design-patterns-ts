import MenuItem from "./MenuItem";

export default class DinerMenu {
  static MAX_ITEMS = 6;
  numberOfItems = 0;
  menuItems: MenuItem[] = [];
  constructor() {
    this.addItem('Vegetarian BLT', 'Bacon with lettuce & tomato on whole wheat', true, 2.99);
    this.addItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99);
    this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
    this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05);
  }
  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.error('Sorry, menu is full! Can\'t add item to menu');
    } else {
      this.menuItems.push(new MenuItem(name, description, vegetarian, price));
      this.numberOfItems += 1;
    }
  }
  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
  // other menu methods here
}