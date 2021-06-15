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

    })
}