import { expect, it } from "vitest";
import { Manager } from "../lib/Manager.js";

it("Should create a new office number", () => {
  const officeNumber = "321";
  const manager = new Manager(officeNumber);
  expect(manager.getOfficeNumber).toEqual(officeNumber);
});

it("Should overwrite role to be Manager", () => {
  const role = "Manager";
  const manager = new Manager(role);
  expect(manager.getRole()).toEqual(role);
});
