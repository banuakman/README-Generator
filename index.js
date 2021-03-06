// Include packages needed for this application
// built in node packages
const fs = require('fs');
// npm packages
const inquirer = require('inquirer');
// generateMarkdown
const generateMarkdown = require("./utils/generateMarkdown")

// Create an array of questions for user input
const questions = [
    //    What is your Project Title?
      {
        type: "input",
        name: "title",
        message: "What is your Project Title?"
      },
    //    Description 
      {
        type: "input",
        name: "description",
        message: "Write a brief introduction to your project"
      },
    //    Instructions
      {
        type: "input",
        name: "instructions",
        message: "Write the instructions to install your project"
      },
    //    Usage
      {
        type: "input",
        name: "usage",
        message: "Write the instructions for using your application"
      },
    //    Contributers
    {
      type: "input",
      name: "contributers",
      message: "Who are contributers of this project?"
    },
    //    Tests
    {
      type: "input",
      name: "tests",
      message: "Provide test information"
    },
    //    email
    {
      type: "input",
      name: "email",
      message: "What is your our email?"
    },
    //    gitHub
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Username?"
    },
    //    License Badge
    {
      type: "list",
      name: "license",
      message: "Which license you would like to use?",
      choices: ["MIT", "GNU GPL v3.0", "Mozilla Public License", "IBM Public License", "None"]
    },
]

// Create a function to initialize app and generate readme_new.md file
function init() {
    inquirer
    .prompt(questions)
    .then(userResponse => {
    fs.writeFile("readme_sample.md", generateMarkdown(userResponse), (err) => err ? console.error(err) : console.log("README_SAMPLE.MD file succesfully created"))
    })
}

// Function call to initialize app
init();
