import OrganizationUnitComponent from "./OrganizationUnitComponent";

export default class OrganizationUnit extends OrganizationUnitComponent {
  private children: OrganizationUnitComponent[] = [];
  constructor(name: string) {
    super(name);
  }
  public add(component: OrganizationUnitComponent): void {
    this.children.push(component);
  }
  public remove(component: OrganizationUnitComponent): void {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
  }
  public isComposite(): boolean {
    return true;
  }
  public operation(): string {
    return this.name;
  }
  public getChildren(index: number): OrganizationUnitComponent {
    return this.children[index];
  }
  public print(indentation: string = ""): void {
    console.log(`${indentation}${this.name}`);
    const iterator = this.createIterator();
    let result = iterator.next();
    while (!result.done) {
      let child = result.value;
      child.print(indentation + "  ");
      result = iterator.next();
    }
  }
  public createIterator(): Iterator<OrganizationUnitComponent, any, undefined> {
    return this.children.values();
  }
  public getName(): string {
    return this.name;
  }
}
