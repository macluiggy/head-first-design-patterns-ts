import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Waitress from "./Waitress";

export default class MenuTestDrive {
  static main(): void {
    const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
    const dinerMenu = new Menu("DINER MENU", "Lunch");
    const cafeMenu = new Menu("CAFE MENU", "Dinner");
    const dessertMenu = new Menu("DESSERT MENU", "Dessert of course!");

    const allMenus = new Menu("ALL MENUS", "All menus combined");
    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinerMenu);
    allMenus.add(cafeMenu);

    // add menu items here
    // DINER MENU
    dinerMenu.add(
      new MenuItem(
        "Pasta",
        "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
        true,
        3.89
      )
    );
    dinerMenu.add(dessertMenu);

    // DESSERT MENU
    dessertMenu.add(
      new MenuItem(
        "Apple Pie",
        "Apple pie with a flakey crust, topped with vanilla icecream",
        true,
        1.59
      )
    );

    // PANCAKE HOUSE MENU
    pancakeHouseMenu.add(
      new MenuItem(
        "K&B's Pancake Breakfast",
        "Pancakes with scrambled eggs, and toast",
        true,
        2.99
      )
    );

    // CAFE MENU
    cafeMenu.add(
      new MenuItem(
        "Veggie Burger and Air Fries",
        "Veggie burger on a whole wheat bun, lettuce, tomato, and fries",
        true,
        3.99
      )
    );

    // add more menu items here
    const waitress = new Waitress(allMenus);
    waitress.printMenu();
  }
}

MenuTestDrive.main();
