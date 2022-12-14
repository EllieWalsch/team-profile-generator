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

export const generateTeamHTML = ({ managerArr, engineerArr, internArr }) => {
  const teamHTML = [];
  teamHTML.push(generateManagerHTML(managerArr));
  teamHTML.push(generateInternHTML(internArr));
  teamHTML.push(generateEngineerHTML(engineerArr));

  return teamHTML.join("");
};
