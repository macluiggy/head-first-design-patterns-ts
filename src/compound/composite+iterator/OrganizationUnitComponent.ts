export default interface OrganizationUnitComponent {
    getName(): string;
    getChildren(index: number): OrganizationUnitComponent;
    add(organizationUnitComponent: OrganizationUnitComponent): void;
    remove(organizationUnitComponent: OrganizationUnitComponent): void;
    print(): void;
    createIterator(): Iterator<OrganizationUnitComponent>;
}