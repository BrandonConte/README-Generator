// function that generate's markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Descrption
${data.description}

## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${data.license}

## Test
${data.test}

## Questions
If you have any questions, you can reach me through the following.
   * GitHub: https://github.com/${data.github}
   * Email: ${data.email}
`;
}

module.exports = generateMarkdown;