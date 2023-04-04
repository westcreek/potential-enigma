// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const generateREADME = ({ title, description, installation, usage, contributing, tests, github, email}) =>
    `<!DOCTYPE html>`

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please write a short description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please describe usage information.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Explain the test intructions.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
   /*  .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Your README.md is succesfully completed :)')
        );
    }); */

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
//function init() {}
const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
