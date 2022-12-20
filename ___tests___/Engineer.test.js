import { test, expect } from "jest";
import { Engineer } from "../lib/Engineer.js";

test("Should create a new Github username", () => {
  const github = "username";
  const engineer = new Engineer(github);
  expect(engineer.getGithub()).toEqual(github);
});

test("Should overwrite role to be Engineer", () => {
  const role = "Engineer";
  const engineer = new Engineer(role);
  expect(engineer.getRole()).toEqual(role);
});
