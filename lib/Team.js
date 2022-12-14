import inquirer from "inquirer";
import { Manager } from "./Manager.js";

const members = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

// prompt the manager questions
// then create a new Manager using the class
// then .push() the new Manager to a members array
function addManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(data);
    members.push(manager);
  });
}
