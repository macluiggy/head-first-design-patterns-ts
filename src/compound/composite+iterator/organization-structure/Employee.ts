import NullIterator from "./NullIterator";
import OrganizationUnitComponent from "./OrganizationUnitComponent";

export default class Employee extends OrganizationUnitComponent {
  constructor(name: string) {
    super(name);
  }
  public print(indentation: string = ""): void {
    console.log(`${indentation}${this.name}`);
  }
  public createIterator(): Iterator<OrganizationUnitComponent, any, undefined> {
    return new NullIterator();
  }
  public getName(): string {
    return this.name;
  }
  public getChildren(index: number): OrganizationUnitComponent {
    throw new Error("Method not implemented.");
  }
  public add(component: OrganizationUnitComponent): void {
    throw new Error("Method not implemented.");
  }
  public remove(component: OrganizationUnitComponent): void {
    throw new Error("Method not implemented.");
  }
  public isComposite(): boolean {
    return false;
  }
  public operation(): string {
    return this.name;
  }
}
