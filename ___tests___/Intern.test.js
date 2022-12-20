import { test, expect } from "jest";
import { Intern } from "../lib/Intern.js";

test("Should create a new school", () => {
  const school = "University";
  const intern = new Intern(school);
  expect(intern.getSchool()).toEqual(school);
});

test("Should overwrite role to be Intern", () => {
  const role = "Intern";
  const intern = new Intern(role);
  expect(intern.getRole()).toEqual(role);
});
