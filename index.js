// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
const generateREADME = ({ title, description, installation, usage, license, contributing, tests, github, email}) =>
    `# ${title} 


## Description
${description}
    
    
## Table of Contents
    
> * [Installation](#installation)
>
> * [Usage](#usage)
>
> * [License](#license)
>
> * [Contributing](#contributing)
>
> * [Tests](#tests)
>
> * [Questions](#questions)
    
    
## Installation
${installation}
    
    
## Usage
${usage}
    
    
## License
${license}
    
    
## Contributing
${contributing}
    
    
## Tests
${tests}
    
    
## Questions
[Please reach out to me at my github here.](https://github.com/${github})
    
If you have any question, please email me:
${email}
    
---
    
© 2023 westcreek. Confidential and Proprietary. All Rights Reserved.
    `;

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
            type: 'checkbox',
            message: 'Please select a license type.',
            name: 'license',
            choices: [
                { name: 'MIT License', value: 'MIT' },
                { name: 'Apache License 2.0', value: 'Apache-2.0' },
                { name: 'GPLv3 License', value: 'GPL-3.0' },
                { name: 'BSD 3-Clause License', value: 'BSD-3-Clause' },
                { name: 'None', value: 'none' }
              ]
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
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Your README.md is succesfully completed :)')
        );
    });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
//function init() {}
/* const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init(); */
