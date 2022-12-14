// classes
// managers have employee + office number

import { Employee } from "./Employee.js";

export class Manager extends Employee {
  officeNumber;

  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
