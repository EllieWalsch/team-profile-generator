import Team from "./lib/Team.js";
import fs from "fs";

const team = new Team();

await team.init();

function generateManagerHTML() {
  return `
    <div class="card m-3" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title bg-primary p-3 text-white text-center">${team.managers[0].name}</h3>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Role: Manager</li>
        <li class="list-group-item">Email:
          <a href="mailto:${team.managers[0].email}">${team.managers[0].email}</a>
        </li>
        <li class="list-group-item">ID: ${team.managers[0].id}</li>
        <li class="list-group-item">Office Number: ${team.managers[0].officeNumber}</li>
      </ul>
    </div>
  </div>`;
}

function generateInternHTML() {
  const internHTML = [];
  for (let i = 0; i < team.interns.length; i++) {
    internHTML.push(
      `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title bg-primary p-3 text-white text-center">${team.interns[i].name}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: Intern</li>
            <li class="list-group-item">Email:
              <a href="mailto:${team.interns[i].email}">${team.interns[i].email}</a>
            </li>
            <li class="list-group-item">ID: ${team.interns[i].id}</li>
            <li class="list-group-item">School: ${team.interns[i].school}</li>
          </ul>
        </div>
      </div>`
    );
  }

  return internHTML.join(" ");
}

function generateEngineerHTML() {
  const engineerHTML = [];
  for (let i = 0; i < team.engineers.length; i++) {
    engineerHTML.push(
      `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title bg-primary p-3 text-white text-center">${team.engineers[i].name}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: Engineer</li>
            <li class="list-group-item">Email:
              <a href="mailto:${team.engineers[i].email}">${team.engineers[i].email}</a>
            </li>
            <li class="list-group-item">ID: ${team.engineers[i].id}</li>
            <li class="list-group-item">Github:
              <a href="https://github.com/${team.engineers[i].github}/" target="_blank">${team.engineers[i].github}</a>
          </ul>
        </div>
      </div>`
    );
  }

  return engineerHTML.join(" ");
}

function generateCardsHTML() {
  const cardsHTML = [];
  cardsHTML.push(generateManagerHTML());
  cardsHTML.push(generateInternHTML());
  cardsHTML.push(generateEngineerHTML());

  return cardsHTML.join(" ");
}

function generateTeamHTML() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
  </head>
  <body>
    <header class="bg-danger p-5">
      <h1 class="text-center text-white">My Team</h1>
    </header>

    <div class="container d-flex flex-row p-0 justify-content-center" style="width: 100%;">
      ${generateCardsHTML()}
    </div>
  </body>
  </html>
  `;
}

console.log("Complete!");

fs.writeFileSync("generatedHTML.html", generateTeamHTML());
