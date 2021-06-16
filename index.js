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
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Please make a selection.',
            choices: [
                'View all employees.',
                // 'View employees by role',
                // 'View employees by department.',
                // 'Add an employee.',
                // 'Add a department.',
                // 'Add a role.',
                // 'Update employee roles.',
                'Exit.'
            ]
        })
        .then((answer) => {
            // const { choice } = answer;
            // if (choice === 'View all employees.') {
            //     viewAllEmployees();
            // }
            switch (answer.action) {
                case 'View all employees.':
                    viewAllEmployees();
                    break;

                // case 'View employees by role':
                //     viewEmployeesByRole();
                //     break;

                // case 'View employees by department':
                //     viewEmployeesByDepartment();
                //     break;

                // case 'Add an employee.':
                //     addEmployee();
                //     break;

                // case 'Add a department.':
                //     addDepartment();
                //     break;

                // case 'Add a role.':
                //     addRole();
                //     break;

                // case 'Update employee role.':
                //     updateEmployeeRole();
                //     break;

                // case 'Exit.':
                //     connection.end();
                //     break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        })
}
// It doesnt look like its making it to this function. Invalid action: undefined when selecting this optino

const viewAllEmployees = () => {

    console.log('made it to view all employees');
    const query = 'SELECT * FROM employeeTrackerDB.employee;';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('+++++++++++++++')
        console.log(res);
        console.log('+++++++++++++++')

    })
}

// const viewEmployeesByRole = () => {
//     console.log("made it to employees by role")
//     connection.end();

// }

// const query = 'SELECT * FROM employeeTrackerDB.employee';
    // connection.query(query, (err, res) => {
    //     res.forEach(({ id, first_name, last_name, role_id, manager_id }) => 
    //         console.log(`${id} || ${first_name} || ${last_name} || ${role_id} || ${manager_id}`))
    // })