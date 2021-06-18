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

// List all employees. Working properly.
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
// ====================================


// List employee by role. Working properly.
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
// ====================================

// List employees by department. Work in progress... I need to figure out the correct query and figure out joins. I still do not completely understand.
const viewEmployeesByDepartment = () => {
    console.log("made it to employees by department")
    inquirer.prompt({
        name: 'departmentSelect',
        type: 'list',
        message: 'Please select a department.',
        choices: [
            'Leadership',
            'Customer Service',
            'Public Relations',
            'Human Resources',
            'Development Team',
            'Back to previous menu.'

        ]
    })
        .then((answer) => {
            switch (answer.departmentSelect) {
                case 'Leadership':
                    leadershipQuery();
                    break;
                case 'Customer Service':
                    customerServiceQuery();
                    break;
                case 'Public Relations':
                    publicRelationsQuery();
                    break;
                case 'Human Resources':
                    humanResourcesQuery();
                    break;
                case 'Development Team':
                    developmentTeamQuery();
                    break;
                case 'Back to previous menu.':
                    runPrompt();
                    break;
            }
        })
}
const leadershipQuery = () => {
    const query = 'SELECT ";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('=======Leadership========');
        console.log(res);
        console.log('=========================');

    })
    viewEmployeesByDepartment();
}
const customerServiceQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.department WHERE id="2";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('=======Customer Service========');
        console.log(res);
        console.log('===============================');
    })
    viewEmployeesByDepartment();
}
const publicRelationsQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.department WHERE id="3";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('============PR===========');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByDepartment();
}
const humanResourcesQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.department WHERE id="4";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('===========HR Rep========');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByDepartment();
}
const developmentTeamQuery = () => {
    const query = 'SELECT * FROM employeeTrackerDB.department WHERE id="5";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('====Development Team=====');
        console.log(res);
        console.log('=========================');
    })
    viewEmployeesByDepartment();
}



//=============++++++======+++++=====+++++====+++++===++++=======


const addEmployee = () => {
    console.log("made it to add employee.")
    connection.end();
}

//=============++++++======+++++=====+++++====+++++===++++=======

const addDepartment = () => {
    console.log("made it to add department.")
    connection.end();
}

//=============++++++======+++++=====+++++====+++++===++++=======

const addRole = () => {
    console.log("made it to add role.")
    connection.end();
}

//=============++++++======+++++=====+++++====+++++===++++=======

const updateEmployeeRole = () => {
    console.log("made it to update employee role.")
    connection.end();
}

