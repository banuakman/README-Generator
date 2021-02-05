// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  License Badge

  ## Table of Contents
  - [Descriptions](#Description)
  - [Instructions](#Instructions)
  - [Usage](#Usage)
  - [Contributers](#Contributers)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Description
  ${data.description}
  
  ## Instructions
  ${data.instructions}
  
  ## Usage
  ${data.usage}
  
  ## Contributers
  ${data.contributers}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please send an email to ${data.email} or reach me through ${data.github}
  `
}

module.exports = generateMarkdown;
