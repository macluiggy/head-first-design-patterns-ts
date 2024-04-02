export default abstract class OrganizationUnitComponent {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract add(component: OrganizationUnitComponent): void;
  public abstract remove(component: OrganizationUnitComponent): void;
  public abstract isComposite(): boolean;
  public abstract operation(): string;
  public abstract getChildren(index: number): OrganizationUnitComponent;
//   public abstract getChildrenLength?(): number;
//   public abstract getChildrenName?(): string;
//   public abstract getChildrenPosition?(): string;
  public abstract print(indentation: string): void;
  public abstract createIterator(): Iterator<OrganizationUnitComponent>;
  public abstract getName(): string;
}
