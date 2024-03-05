import Ford from "./Ford";

export default class Ford2024 implements Ford {
  startEngine(): void {
    console.log('Starting Ford 2024 engine');
  }
  stopEngine(): void {
    console.log('Stopping Ford 2024 engine');
  }
  accelerate(): void {
    console.log('Ford 2024 is accelerating');
  }
  brake(): void {
    console.log('Ford 2024 is braking');
  }
  honk(): void {
    console.log('Ford 2024 is honking');
  }
}