const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const shell = require('shelljs');
const exec = require('child_process').exec;
const inquirer = require("./inquirer/index");

clear();
console.log(
  chalk.yellow(
    figlet.textSync("Automate Express", { horizontalLayout: "full" })
  )
);

const run = async () => {
  const projectName = await inquirer.AskProjectName();
  console.log("Setting Up the Project Please Wait...")
 exec('sh shell/createStructure.sh ' +  projectName.ProjectName,
  (error, stdout, stderr) => {
      console.log(`${stdout}`);
      console.log(`${stderr}`);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
  });
};

run();
