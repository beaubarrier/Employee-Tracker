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
});

const runPrompt = () => {
    inquirer.prompt({
        name: 'userInput',
        type: 'list',
        message: 'Please make a selection.',
        choices: [
            'View all employees.',
            'View employees by role.',
            'View employees by department.',
            'Add an employee.',
            'Add a department.',
            'Add a role.',
            'Update employee roles.',
            'Exit.'
        ]
    })
        .then((answer) => {
            switch (answer.userInput) {
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
                    console.log('Thanks for using Employee Tracker!');
                    connection.end();
                    break;

                default:
                    console.log(`Invalid input: ${answer.userInput}`);
                    break;
            }
        })
}

const viewAllEmployees = () => {

    console.log('made it to view all employees');
    const query = 'SELECT * FROM employeeTrackerDB.employee;';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('+++++++All Employees++++++++');
        console.log(res);
        console.log('++++++++++++++++++++++++++++');
        connection.end();
    })
}


const viewEmployeesByRole = () => {
    console.log("made it to employees by role")
    inquirer.prompt({
        name: 'roleSelect',
        type: 'list',
        message: 'Please select a role.',
        choices: [
            'Manager',
            'Specialist',
            'Analyst',
            'HR Rep',
            'Engineer',
            'Back to previous menu.'

        ]
    })
        .then((answer) => {
            switch (answer.roleSelect) {
                case 'Manager':
                    managerQuery();
                    break;
                case 'Specialist':
                    specialistQuery();
                    break;
                case 'Analyst':
                    analystQuery();
                    break;
                case 'HR Rep':
                    hrRepQuery();
                    break;
                case 'Engineer':
                    engineerQuery();
                    break;
                case 'Back to previous menu.':
                    runPrompt();
                    break;
            }
        })
}

const managerQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="1";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('=======Managers========');
        console.log(res);
        console.log('=======================');

    })
    viewEmployeesByRole();
}


const specialistQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="2";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('=======Specialist========');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByRole();
}
const analystQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="3";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('==========Analyst========');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByRole();
}
const hrRepQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="4";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('===========HR Rep========');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByRole();
}
const engineerQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="5";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('=======Engineer==========');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByRole();
}





// case 'Analyst':
//     const query3 = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="3";';
//     connection.query(query3, (err, res) => {
//         if (err) throw err;
//         console.log('=======Managers========');
//         console.log(res);
//         console.log('=======================');

//     })
//         .then(() => {
//             viewEmployeesByRole()
//         })
//     break;

// case 'HR Rep':
//     const query4 = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="4";';
//     connection.query(query4, (err, res) => {
//         if (err) throw err;
//         console.log('=======Managers========');
//         console.log(res);
//         console.log('=======================');

//     })
//         .then(() => {
//             viewEmployeesByRole()
//         })
//     break;

// case 'Engineer':
//     const query5 = 'SELECT * FROM employeeTrackerDB.employee WHERE role_id="5";';
//     connection.query(query5, (err, res) => {
//         if (err) throw err;
//         console.log('=======Managers========');
//         console.log(res);
//         console.log('=======================');

//     })
//         .then(() => {
//             viewEmployeesByRole()
//         })
//     break;

// case 'Back to previous menu.':
//     runPrompt();
//     break;




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