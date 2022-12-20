import { expect, it } from "vitest";
import { Employee } from "../lib/Employee.js";

it("Should create a new name", () => {
  const name = "Ellie";
  const employee = new Employee(name);
  expect(employee.getName()).toEqual(name);
});

it("Should create a new ID", () => {
  const id = "123";
  const employee = new Employee(id);
  expect(employee.getId()).toEqual(id);
});

it("Should create a new email", () => {
  const email = "test@email.com";
  const employee = new Employee(email);
  expect(employee.getEmail()).toEqual(email);
});

it("Should create a new role", () => {
  const role = "Employee";
  const employee = new Employee(role);
  expect(employee.getRole()).toEqual(role);
});
