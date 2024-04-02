import OrganizationUnit from "./OrganizationUnit";
import Employee from "./Employee";

const engineeringDepartment = new OrganizationUnit("Engineering Department");
const designTeam = new OrganizationUnit("Design Team");
const developmentTeam = new OrganizationUnit("Development Team");

const johnDoe = new Employee("John Doe");
const janeDoe = new Employee("Jane Doe");
const markSmith = new Employee("Mark Smith");

engineeringDepartment.add(designTeam);
engineeringDepartment.add(developmentTeam);

designTeam.add(johnDoe);
designTeam.add(janeDoe);
developmentTeam.add(markSmith);

engineeringDepartment.print("");

// const iterator = engineeringDepartment.createIterator();
// let result = iterator.next();
// while (!result.done) {
//   console.log(result.value.getName());
//   result = iterator.next();
// }