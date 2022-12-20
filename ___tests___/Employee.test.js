import { test, expect } from "jest";
import { Employee } from "../lib/Employee.js";

test("Should create a new name", () => {
  const name = "Ellie";
  const employee = new Employee(name);
  expect(employee.getName()).toEqual(name);
});

test("Should create a new ID", () => {
  const id = "123";
  const employee = new Employee(id);
  expect(employee.getId()).toEqual(id);
});

test("Should create a new email", () => {
  const email = "test@email.com";
  const employee = new Employee(email);
  expect(employee.getEmail()).toEqual(email);
});

test("Should create a new role", () => {
  const role = "Employee";
  const employee = new Employee(role);
  expect(employee.getRole()).toEqual(role);
});
