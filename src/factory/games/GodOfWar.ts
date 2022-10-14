import GameProduct from "./GameProduct";

export default class GodOfWar extends GameProduct {
  name: string;
  type: string;
  price: number;
  description: string;

  constructor() {
    super();
    this.name = "God of War";
    this.type = "Action";
    this.price = 60;
    this.description =
      "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). Released on April 20, 2018, for the PlayStation 4 (PS4) console, it is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III. The game is set in ancient Greece with vengeance as its central motif. Players control the protagonist Kratos, a Spartan warrior who serves the Greek gods. Kratos ascends Mount Olympus to kill the Greek gods and ends up killing his own family. The game is a reboot of the series, with Kratos now a father to a son, Atreus, who is the central character of the game. The game received critical acclaim, with praise directed towards its combat, visuals, story, and soundtrack. It won over 100 awards, including Game of the Year from several publications. It has sold over 10 million copies worldwide as of March 2019, making it one of the best-selling PlayStation 4 games. A sequel, God of War, was released on April 20, 2018. The game was announced at the 2016 PlayStation Experience. It was developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). It was released on April 20, 2018, for the PlayStation 4 (PS4) console. It is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III. The game is set in ancient Greece with vengeance as its central motif. Players control the protagonist Kratos, a Spartan warrior who serves the Greek gods. Kratos ascends Mount Olympus to kill the Greek gods and ends up killing his own family. The game is a reboot of the series, with Kratos now a father to a son, Atreus, who is the central character of the game. The game received critical acclaim, with praise directed towards its combat, visuals, story, and soundtrack. It won over 100 awards, including Game of the Year from several publications. It has sold over 10 million copies worldwide as of March 2019, making it one of the best-selling PlayStation 4 games. A sequel, God of War, was released on April 20, 2018.";
  }
  buy(): void {
    console.log(`Buying ${this.name}...`);
  }

  download(): void {
    setTimeout(() => {
      console.log(`Downloading ${this.name}...`);
    }, 1000);
  }

  install(): void {
    setTimeout(() => {
      console.log(`Installing ${this.name}...`);
    }, 2000);
  }

  play(): void {
    setTimeout(() => {
      console.log(`Playing ${this.name}...`);
    }, 3000);
  }
}
