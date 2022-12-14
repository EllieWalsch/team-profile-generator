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

const mainQuestions = [
  {
    type: "list",
    name: "addMember",
    message: "Which type of team member would you like to add?",
    choices: ["Intern", "Engineer", "I don't want to add more team members"],
  },
];

// prompt the manager questions
// then create a new Manager using the class
// then .push() the new Manager to a members array
// then prompt for the other employees
function addManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(data);
    members.push(manager);
    addEmployees();
  });
}

// Add the manager first, then the employees
addManager();

// prompts main questions to add more employees
// if intern, prompt intern questions
// if engineer, prompt engineer questions
// if no more members, end questions/generate HTML?
function addEmployees() {
  inquirer.prompt(mainQuestions).then((data) => {
    if (data.addMember === "Intern") {
      console.log("it worked");
    }

    if (data.addMember === "Engineer") {
      console.log("it worked");
    }

    if (data.addMember === "I don't want to add more team members") {
      // end questions?
    }
  });
}
