const inquirer = require("inquirer");

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: "ProjectName",
        type: "input",
        message: "Enter your Project Name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter valid Project Name.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
