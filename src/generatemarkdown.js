const checkTOC = confirmTOC => {
    if (confirmTOC) {
        return `
        ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributing)
* [Testing](#tests)
* [Questions](#questions)
        `;
    }
};

const licenseCheck = (license,name) => {
    return `
    Copyright (c) ${name}. All rights reserved.
Licensed under the ${license} license.`
};

const contribCheck = (userInputs) => {
    if(!userInputs.contribute) {
        return `
        If you'd like to contribute to this project, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/) standard guidelines.`
    } else {
        return `
        ${userInputs.customContribute}
        `
    }
};

const contribBadge = (check) => {
    if (!check) {
        return `
        [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt)
        `
    }
};

const licBadge = (license) => {
    switch(license) {
        case 'Apache License 2.0':
            return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`
        break;
        case 'GNU GPLv3':
            return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`
        break;
        case "MIT":
            return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`
        break;
        default: 
            return `
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`
    }
};

module.exports = userInputs => {
    return `
# ${userInputs.title}
${contribBadge(userInputs.contribute)} ${licBadge(userInputs.licenses)}
## Description
${userInputs.description}
${checkTOC(userInputs.confirmToC)}
## Installation
${userInputs.installation}
## Usage
${userInputs.usage}
## License
${licenseCheck(userInputs.licenses, userInputs.name)}
## Contributing
${contribCheck(userInputs)}
## Tests
${userInputs.tests}
## Questions
If you have any questions or concerns, please feel free to contact me via Github or email!
Email: ${userInputs.email}
[Github](https://github.com/${userInputs.name})
`
};