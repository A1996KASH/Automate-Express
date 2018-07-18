const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("./inquirer/index");

clear();
console.log(
  chalk.yellow(
    figlet.textSync("Automate Express", { horizontalLayout: "full" })
  )
);

const run = async () => {
  const projectName = await inquirer.askGithubCredentials();
  console.log(projectName.ProjectName);
};

run();
