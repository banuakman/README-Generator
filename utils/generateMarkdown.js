// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "GNU GPL v3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "Mozilla Public License":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "IBM Public License":
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case "None":
      return "";
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

## Table of Contents
- [Descriptions](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributers](#Contributers)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.instructions}

## Usage
${data.usage}

## Contributers
${data.contributers}

## Tests
${data.tests}

## Questions
If you have any questions, please send an email to ${data.email} or reach me through https://github.com/${data.github}`
}

module.exports = generateMarkdown;