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
            'View employees by role',
            'View employees by department.',
            'Add an employee.',
            'Add a department.',
            'Add a role.',
            'Update employee roles.',
            'Exit.'
        ]
    })
        .then((answer) => {
            switch (answer.action) {
                case 'View all employees.':
                    viewAllEmployees();
                    break;

                case 'View employees by role':
                    viewEmployeesByRole();
                    break;

                case 'View employees by department':
                    viewEmployeesByDepartment();
                    break;

                case 'Add an employee.':
                    addEmployee();
                    break;

                case 'Add a department.':
                    addDepartment();
                    break;

                case 'Add a role.':
                    addRole();
                    break;

                case 'Update employee role.':
                    updateEmployeeRole();
                    break;

                case 'Exit.':
                    connection.end();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        })
}

function viewAllEmployees() {
    const query = 'SELECT employee FROM employee WHERE ?';
    connection.query(query, (err, res) => {
        res.forEach(({ employee }) => console.log(employee))
    })
}