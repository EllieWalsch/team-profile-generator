import { test, expect } from "jest";
import { Manager } from "../lib/Manager.js";

test("Should create a new office number", () => {
  const officeNumber = "321";
  const manager = new Manager(officeNumber);
  expect(manager.getOfficeNumber).toEqual(officeNumber);
});

test("Should overwrite role to be Manager", () => {
  const role = "Manager";
  const manager = new Manager(role);
  expect(manager.getRole()).toEqual(role);
});
