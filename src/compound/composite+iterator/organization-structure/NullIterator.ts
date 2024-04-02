import OrganizationUnitComponent from "./OrganizationUnitComponent";

export default class NullIterator
  implements Iterator<OrganizationUnitComponent>
{
  public first(): void {
    return;
  }
  public next(): IteratorResult<OrganizationUnitComponent, any> {
    return { done: true, value: null };
  }
  public isDone(): boolean {
    return true;
  }
  public currentItem(): any {
    return null;
  }
}
