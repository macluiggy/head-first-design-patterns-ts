import Duck from "./Duck";

export default class DuckSortTestDrive {
  static main(): void {
    const ducks: Duck[] = [
      new Duck("Daffy", 8),
      new Duck("Dewey", 2),
      new Duck("Howard", 7),
      new Duck("Louie", 2),
      new Duck("Donald", 10),
      new Duck("Huey", 2),
    ];
    console.log("Before sorting:");
    this.display(ducks);
    ducks.sort((a: Duck, b: Duck) => a.compareTo(b));
    console.log("\nAfter sorting:");
    this.display(ducks);
  }
  static display(ducks: Duck[]): void {
    ducks.forEach((duck: Duck) => console.log(duck.toString()));
  }
}

DuckSortTestDrive.main();
