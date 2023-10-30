const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your logo text. (Only up to 3 characters)',
        name: 'text',
        validate: (value) => { if (value) { return true } else { return 'Please enter a text to continue' } }
    },
    {
        type: 'input',
        message: 'Please enter a text colour. (Enter a keyword or a hexadecimal number)',
        name: 'tcolour',
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
        message: 'Please enter a background colour for your logo. (Enter a keyword or a hexadecimal number)',
        name: 'lcolour',
        validate: (value) => { if (value) { return true } else { return 'Please enter a colour to continue' } }
    },
]).then((answers) => {
    let user;
    if (answers.shape === "Circle") {
        user = new Circle(answers.text, answers.tcolour, answers.lcolour)
    } else if (answers.shape === "Triangle") {
        user = new Triangle(answers.text, answers.tcolour, answers.lcolour)
    } else {
        user = new Square(answers.text, answers.tcolour, answers.lcolour)
    }

    fs.writeFile('logo.svg', user.render(), (err, res) => {
        if (err) throw err;
        console.log('Your SVG logo has been created!');
    });
});