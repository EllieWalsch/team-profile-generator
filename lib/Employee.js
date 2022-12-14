// classes
// all employees have name, email, and id

export class Employee {
  name;
  id;
  email;

  constructor({ name, id, email }) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return "Employee";
  }
}
