import { expect, it } from "vitest";
import { Engineer } from "../lib/Engineer.js";

it("Should create a new Github username", () => {
  const github = "username";
  const engineer = new Engineer(github);
  expect(engineer.getGithub()).toEqual(github);
});

it("Should overwrite role to be Engineer", () => {
  const role = "Engineer";
  const engineer = new Engineer(role);
  expect(engineer.getRole()).toEqual(role);
});
