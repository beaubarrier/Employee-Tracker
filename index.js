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
        name: 'action',
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

                case 'View employees by role.':
                    viewEmployeesByRole();
                    break;

                case 'View employees by department.':
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

                case 'Update employee roles.':
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

const viewAllEmployees = () => {

    console.log('made it to view all employees');
    const query = 'SELECT * FROM employeeTrackerDB.employee;';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('+++++++All Employees++++++++')
        console.log(res);
        console.log('++++++++++++++++++++++++++++')
    })
}


const viewEmployeesByRole = () => {
    console.log("made it to employees by role")
    connection.end();

}

const viewEmployeesByDepartment = () => {
    console.log("made it to employees by department")
    connection.end();

}

const addEmployee = () => {
    console.log("made it to add employee.")
    connection.end();

}

const addDepartment = () => {
    console.log("made it to add department.")
    connection.end();

}

const addRole = () => {
    console.log("made it to add role.")
    connection.end();

}

const updateEmployeeRole = () => {
    console.log("made it to update employee role.")
    connection.end();

}






// const query = 'SELECT * FROM employeeTrackerDB.employee';
    // connection.query(query, (err, res) => {
    //     res.forEach(({ id, first_name, last_name, role_id, manager_id }) => 
    //         console.log(`${id} || ${first_name} || ${last_name} || ${role_id} || ${manager_id}`))
    // })