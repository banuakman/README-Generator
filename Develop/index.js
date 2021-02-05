// TODO: Include packages needed for this application
// DEPENDENCIES ===============================
// built in node packages
const fs = require('fs');
// npm packages
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// DATA =======================================
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
        message: "What are the instructions to install your project?"
      },
    //    Usage
      {
        type: "input",
        name: "usage",
        message: "Give us an example for using this application"
      },
    //    Contributers
    {
      type: "input",
      name: "contributers",
      message: "Who are the contributers of this project?"
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
      message: "Which lisence you would like to use?",
      choices: ["MIT", "GNU GPL v3.0", "Mozilla Public License", "IBM Public License"]
    },
      
    ]
  
// TODO: Create a function to write README file
// writeHTML - takes user reponses and writes an html file
const writeHTML = ({ title, description, instructions, contributers, tests, email, github, license}) => {
    // put user info into html code
    const content = `

    `
      // write it to a file
    fs.writeFile("readme.md", text, (err) => err ? console.error(err) : console.log("README.MD file succesfully created"));
    }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(userResponse => {
      //    Write a file with their answers
      writeHTML(userResponse);
    })
    .catch(err => {
      console.error(err);
    })
}

// Function call to initialize app
init();
