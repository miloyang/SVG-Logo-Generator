// Including the inquirer package needed for this application
const inquirer = require('inquirer');

// const shapes = require('./lib/shapes');

const { writeFile } = require('fs').promises;

// Creating an array of questions for logo requirements
class CLI {
    constructor() {
        this.title = '';
        this.logos = [];
    }
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Enter your logo text. (No more than 3 characters)',
                name: 'Text',
                validate: (value) => { if (value) { return true } else { return 'Please enter a text to continue' } }
            },
            {
                type: 'input',
                message: 'What colour would you like to use for the text? (Enter a keyword or a hexadecimal number)',
                name: 'tcolor',
                validate: (value) => { if (value) { return true } else { return 'Please enter a colour to continue' } }
            },
            {
                type: 'list',
                message: 'What shape would you like your logo to be?',
                name: 'shape',
                choices: ['Circle', 'Triangle', 'Square'],
                validate: (value) => { if (value) { return true } else { return 'Please choose a shape to continue' } }
            },
            {
                type: 'input',
                message: 'What colour would you like your chosen shap to be in? (Enter a keyword or a hexadecimal number)',
                name: 'scolour',
                validate: (value) => { if (value) { return true } else { return 'Please enter a colour to continue' } }
            },
        ])
        return writeFile(
            join(__dirname, '..', 'output', 'logo.svg'),
        );
        .then(() => console.log('Successfully created logo.svg'))
        .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong. Please try again.')
        })
    }
}

module.exports = CLI;