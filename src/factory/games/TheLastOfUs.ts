import GameProduct from "./GameProduct";

export default class TheLastOfUs extends GameProduct {
  description: string;
  name: string;
  price: number;
  type: string;
  constructor() {
    super();
    this.name = "The Last of Us";
    this.price = 60;
    this.type = "Action";
    this.description = "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. The game is played from a third-person perspective with the player controlling Joel, a smuggler tasked with escorting a 14-year";
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
