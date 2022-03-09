// packages for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type:'input',
      name: 'description',
      message: 'Describe your project in detail.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What packages need to be installed?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use of your project. Include screenshots as needed.'
    },
    {
      type: 'input',
      name: 'contributing',
      message: "List any collaborators (If any, with links to their GitHub profiles), third-party assets (Include the creator's links) and links to any tutorials/resources used."
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to select?',
      choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'GPL_3.0']
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide any tests and examples for your project'
    }
  ])

// function to write README file
.then(function(data) {
  fs.writeFile('generatedREADME.md', generateMarkdown(data), (err) => err ? console.log(err) : console.log("You have created your README file successfully!"))
})