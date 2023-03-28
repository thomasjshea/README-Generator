// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your application.',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instruction for your applciation.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your application.',
},
{
    type: 'input',
    name: 'credits',
    message: 'Please list any collaborators or resources you used in development of your application.',
},
{
    type: 'input',
    name: 'tests',
    message: 'Please describe any tests you ran on your application.'
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your Github username.'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
},
{
    type: 'list',
    name: 'license',
    message: 'Please select your license from the list if you are using one.',
    choices: ['','MIT', 'Apache 2.0', 'Mozilla Public License', 'GNU GPLv3', 'Boost Software License 1.0', 'The Unilicense'],
}];

// TODO: Create a function to write README file
function writeToFile(fileName, markdownPageContent) {
    fs.writeFile(fileName, markdownPageContent, (err) => {
        err ? console.log(err) : console.log('Successfully created README file!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = 'sample.md'
        const markdownPageContent = generateMarkdown(data)
        writeToFile(fileName, markdownPageContent);
    })
}

// Function call to initialize app
init();
