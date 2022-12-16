import inquirer from "inquirer";
import { Engineer } from "./Engineer.js";
import { Intern } from "./Intern.js";
import { Manager } from "./Manager.js";
// import { generateTeamHTML } from "../src/generateHTML.js";

export default class Team {
  managers = [];
  interns = [];
  engineers = [];

  managerQuestions = [
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

  mainQuestions = [
    {
      type: "list",
      name: "addMember",
      message: "Which type of team member would you like to add?",
      choices: ["Intern", "Engineer", "I don't want to add more team members"],
    },
  ];

  internQuestions = [
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

  engineerQuestions = [
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

  async addManager() {
    const data = await inquirer.prompt(this.managerQuestions);
    const manager = new Manager(data);
    this.managers.push(manager);
  }

  async init() {
    await this.addManager();
    return this.addEmployees();
  }

  async addEmployees() {
    const data = await inquirer.prompt(this.mainQuestions);
    if (data.addMember === "Intern") {
      await this.addIntern();
      await this.addEmployees();
    }

    if (data.addMember === "Engineer") {
      await this.addEngineer();
      await this.addEmployees();
    }
  }

  async addIntern() {
    const data = await inquirer.prompt(this.internQuestions);
    const intern = new Intern(data);
    this.interns.push(intern);
  }

  async addEngineer() {
    const data = await inquirer.prompt(this.engineerQuestions);
    const engineer = new Engineer(data);
    this.engineers.push(engineer);
  }
}
