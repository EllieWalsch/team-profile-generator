// classes
// Engineers have employee + github

import { Employee } from "./Employee.js";

export class Engineer extends Employee {
  github;

  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
}
