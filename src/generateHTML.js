// this will generate HTML for each class

const generateManagerHTML = (managerArr) => `
  <div class="card m-3" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title bg-primary p-3 text-white text-center">${managerArr.getName()}</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: ${managerArr.getEmail()}</li>
        <li class="list-group-item">ID: ${managerArr.getId()}</li>
        <li class="list-group-item">Office Number: ${managerArr.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`;

const generateInternHTML = (internArr) => {
  const internHTML = [];
  for (let i = 0; i < internArr.length; i++) {
    internHTML.push(
      `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title bg-primary p-3 text-white text-center">${internArr.getName()}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${internArr[i].getEmail()}</li>
            <li class="list-group-item">ID: ${internArr[i].getId()}</li>
            <li class="list-group-item">School: ${internArr[i].getSchool()}</li>
          </ul>
        </div>
      </div>`
    );
  }

  return internHTML;
};

const generateEngineerHTML = (engineerArr) => {
  const engineerHTML = [];
  for (let i = 0; i < engineerArr.length; i++) {
    engineerHTML.push(
      `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title bg-primary p-3 text-white text-center">${engineerArr.getName()}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${engineerArr[i].getEmail()}</li>
            <li class="list-group-item">ID: ${engineerArr[i].getId()}</li>
            <li class="list-group-item">Github: ${engineerArr[
              i
            ].getGithub()}</li>
          </ul>
        </div>
      </div>`
    );
  }

  return engineerHTML;
};

const generateCardsHTML = ({ managerArr, engineerArr, internArr }) => {
  const cardsHTML = [];
  cardsHTML.push(generateManagerHTML(managerArr));
  cardsHTML.push(generateInternHTML(internArr));
  cardsHTML.push(generateEngineerHTML(engineerArr));

  return cardsHTML.join("");
};

export const generateTeamHTML = (team) => `<!DOCTYPE html>
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

  <div class="container d-flex flex-row p-0" style="width: 100%;">
    ${generateCardsHTML(team)}
  </div>
</body>
</html>
`;
