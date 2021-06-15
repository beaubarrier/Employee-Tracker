const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'penny',
    database: 'employeeTrackerDB',
});


connection.connect((err) => {
    if (err) throw err;
    runPrompt();
})

const runPrompt = () => {
    inquirer.prompt({
        name: 'initialQuestions',
        type: 'list',
        message: 'Please make a selection.',
        choices: [
            'View all employees.',
            'View employees by department',
            'View employees by role.',
            'Add an employee.',
            'Add a department.',
            'Add a role.',
            'Update employee roles.',
            'Exit.'
        ]
    })
}