// classes
// interns have employee + school

import { Employee } from "./Employee.js";

export class Intern extends Employee {
  school;

  constructor({ name, id, email, school }) {
    super({ name, id, email });
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
}
