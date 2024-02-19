export default class Tea {
  prepareRecipe(): void {
    this.boilWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addLemon();
  }
  boilWater(): void {
    console.log("Boiling water");
  }
  steepTeaBag(): void {
    console.log("Steeping the tea");
  }
  pourInCup(): void {
    console.log("Pouring into cup");
  }
  addLemon(): void {
    console.log("Adding Lemon");
  }
}
