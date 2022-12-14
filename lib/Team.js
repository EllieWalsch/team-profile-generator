import inquirer from "inquirer";
import { Engineer } from "./Engineer.js";
import { Intern } from "./Intern.js";
import { Manager } from "./Manager.js";

const managerArr = [];
const internArr = [];
const engineerArr = [];

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

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
];

// prompt the manager questions
// then create a new Manager using the class
// then .push() the new Manager to a members array
// then prompt for the other employees
function addManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(data);
    managerArr.push(manager);
    console.log("Manager added!");
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
      addIntern();
    }

    if (data.addMember === "Engineer") {
      addEngineer();
    }

    if (data.addMember === "I don't want to add more team members") {
      // end questions?
    }
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    const intern = new Intern(data);
    internArr.push(intern);
    console.log("Intern added!");
    addEmployees();
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(data);
    engineerArr.push(engineer);
    console.log("Engineer added!");
    addEmployees();
  });
}
