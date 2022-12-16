import Team from "./lib/Team.js";

const team = new Team();

await team.init();
console.log(team.interns);
