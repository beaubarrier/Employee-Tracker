const mysql = require('mysql');
const inquirer = require('inquirer');
const colors = require('colors');
const empIdTemp = [];

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'penny',
    database: 'employeeTrackerDB',
});


connection.connect((err) => {
    if (err) throw err;
    console.table(`
   ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
   ████                                                                                                                                          ████
   ████    ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗    ████████╗██████╗  █████╗  ██████╗██╗  ██╗███████╗██████╗     ████
   ████    ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝    ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗    ████
   ████     ████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗         ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝    ████
   ████    ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝         ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗    ████
   ████    ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗       ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║    ████
   ████    ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ████
   ████                                                                                                                                          ████
   ███████████████████████████████████████████████████████████████ by Beau Barrier ██████████████████████████████████████████████████████████████████
                                                                                                

                                                                                                `.magenta)
    runPrompt();
});

// User input prompt.============================================
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
                    console.table(`
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░░░░
  ░░░░░░░░▄▀░░░░░░░░░░░░▄░░░░░░░▀▄░░░░░░░
  ░░░░░░░░█░░▄░░░░▄░░░░░░░░░░░░░░█░░░░░░░
  ░░░░░░░░█░░░░░░░░░░░░▄█▄▄░░▄░░░█░▄▄▄░░░
  ░▄▄▄▄▄░░█░░░░░░▀░░░░▀█░░▀▄░░░░░█▀▀░██░░
  ░██▄▀██▄█░░░▄░░░░░░░██░░░░▀▀▀▀▀░░░░██░░
  ░░▀██▄▀██░░░░░░░░▀░██▀░░░░░░░░░░░░░▀██░
  ░░░░▀████░▀░░░░▄░░░██░░░▄█░░░░▄░▄█░░██░
  ░░░░░░░▀█░░░░▄░░░░░██░░░░▄░░░▄░░▄░░░██░
  ░░░░░░░▄█▄░░░░░░░░░░░▀▄░░▀▀▀▀▀▀▀▀░░▄▀░░
  ░░░░░░█▀▀█████████▀▀▀▀████████████▀░░░░
  ░░░░░░████▀░░███▀░░░░░░▀███░░▀██▀░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`.brightBlue)

                    console.table('Goodbye! Thanks for using Employee Tracker!'.magenta);
                    connection.end();
                    break;

                default:
                    console.log(`Invalid input: ${answer.userInput}`);
                    break;
            }
        })
}
//===============================================================



//===List all employees. Working properly.=======================
const viewAllEmployees = () => {

    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee;'
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(" ")
        console.table(`All Employees_`.magenta);
        console.table(res);
        console.log(" ")
        runPrompt();
    })
}
//===============================================================




// List employee by role. Working properly.======================
const viewEmployeesByRole = () => {
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
// List employee by role query functions.========================
const managerQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="1";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Managers_'.magenta);
        console.table(res);
        viewEmployeesByRole();
    })

}
const specialistQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="2";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Specialists_'.magenta);
        console.table(res);
        viewEmployeesByRole();
    })

}
const analystQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="3";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Analysts_'.magenta);
        console.table(res);
        viewEmployeesByRole();
    })

}
const hrRepQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="4";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('HR Reps_'.magenta);
        console.table(res);
        viewEmployeesByRole();
    })

}
const engineerQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="5";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Engineers_'.magenta);
        console.table(res);
        viewEmployeesByRole();
    })

}
//===============================================================



// List employees by department. Working properly.===============
const viewEmployeesByDepartment = () => {

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
// List employee by department query functions.==================
const leadershipQuery = () => {
    const query = "SELECT e.id as 'Emp ID', e.first_name as 'First Name', e.last_name as 'Last Name', Dept.id as 'Dept ID' , Dept.name as 'Department Name', role.title, role.salary  FROM employee AS e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department as Dept ON Dept.id = role.department_id WHERE dept.name = 'Leadership'; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Leadership_'.magenta);
        console.table(res);
        viewEmployeesByDepartment();
    });

}
const customerServiceQuery = () => {
    const query = "SELECT e.id as 'Emp ID', e.first_name as 'First Name', e.last_name as 'Last Name', Dept.id as 'Dept ID' , Dept.name as 'Department Name', role.title, role.salary  FROM employee AS e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department as Dept ON Dept.id = role.department_id WHERE dept.name = 'Customer Service'; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Customer Service_'.magenta);
        console.table(res);
        viewEmployeesByDepartment();
    });

}
const publicRelationsQuery = () => {
    const query = "SELECT e.id as 'Emp ID', e.first_name as 'First Name', e.last_name as 'Last Name', Dept.id as 'Dept ID' , Dept.name as 'Department Name', role.title, role.salary  FROM employee AS e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department as Dept ON Dept.id = role.department_id WHERE dept.name = 'Public Relations'; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Public Relations_'.magenta);
        console.table(res);
        viewEmployeesByDepartment();
    });

}
const humanResourcesQuery = () => {
    const query = "SELECT e.id as 'Emp ID', e.first_name as 'First Name', e.last_name as 'Last Name', Dept.id as 'Dept ID' , Dept.name as 'Department Name', role.title, role.salary  FROM employee AS e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department as Dept ON Dept.id = role.department_id WHERE dept.name = 'Human Resources'; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Human Resources_'.magenta);
        console.table(res);
        viewEmployeesByDepartment();
    });
}
const developmentTeamQuery = () => {
    const query = "SELECT e.id as 'Emp ID', e.first_name as 'First Name', e.last_name as 'Last Name', Dept.id as 'Dept ID' , Dept.name as 'Department Name', role.title, role.salary  FROM employee AS e LEFT JOIN role ON e.role_id = role.id LEFT JOIN department as Dept ON Dept.id = role.department_id WHERE dept.name = 'Development Team'; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Development Team_'.magenta);
        console.table(res);
        viewEmployeesByDepartment();
    });

}
//===============================================================




//==Add an employee. Working properly.===========================
const addEmployee = () => {

    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: "Please enter the employee's first name.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid name.';
                }
                return valid || 'Please enter a valid name.';
            }
        },
        {
            name: 'lastName',
            type: 'input',
            message: "Please enter the employee's last name.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid name.';
                }
                return valid || 'Please enter a valid name.';
            }
        },
        {
            name: 'roleId',
            type: 'input',
            message: "Please enter the employee's role number.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid role number.';
                }
                return valid || 'Please enter a valid role number.';
            }
        },
        {
            name: 'managerId',
            type: 'input',
            message: "Please enter the employee's manager's id number.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid manager id number.';
                }
                return valid || 'Please enter a valid manager id number.';
            },
        }
    ])
        .then((answers) => {
            const query = `INSERT INTO employee( first_name, last_name, role_id, manager_id) VALUES( '${answers.firstName}', '${answers.lastName}', '${answers.roleId}', '${answers.managerId}');`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log('\n')
                console.log('  ================================Success!================================'.yellow);
                console.table(`             You added ${answers.firstName} ${answers.lastName} to the employee list!`.brightBlue);
                console.log('  ========================================================================'.yellow);
                console.log('\n ')
                runPrompt();
            });
        })
}
//===============================================================



//==Add a department. Working properly.==========================
const addDepartment = () => {

    inquirer.prompt([
        {
            name: 'departmentName',
            type: 'input',
            message: "Please enter the name of the department.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid name.';
                }
                return valid || 'Please enter a valid name.';
            }
        },
    ])
        .then((answers) => {
            const query = `INSERT INTO department(name) VALUES('${answers.departmentName}');`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log('\n')
                console.log('  ================================Success!================================'.yellow);
                console.table(`              You added ${answers.departmentName} to the department list!`.brightBlue);
                console.log('  ========================================================================'.yellow);
                console.log('\n ')
                runPrompt();
            });
        })
}
//===============================================================




//==Add a role. Working properly.================================
const addRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: "Please enter the job title.",
            validate: function (value) {
                var valid = isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid title.';
                }
                return valid || 'Please enter a valid title.';
            }
        },
        {
            name: 'salary',
            type: 'input',
            message: "Please enter the salary for this position.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid number.';
                }
                return valid || 'Please enter a valid number.';
            }
        },
        {
            name: 'deptId',
            type: 'input',
            message: "Please enter the id number for the department this role belongs to.",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value))
                if (value === "") {
                    return value || 'Please enter a valid department id number.';
                }
                return valid || 'Please enter a valid department id number.';
            }
        },
    ])
        .then((answers) => {
            const query = `INSERT INTO role( title, salary, department_id) VALUES( '${answers.title}', '${answers.salary}', '${answers.deptId}');`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log('\n')
                console.log('  ================================Success!================================'.yellow);
                console.table(`                      You added the ${answers.title} role!`.brightBlue);
                console.log('  ========================================================================'.yellow);
                console.log('\n ')
                runPrompt();
            });
        })
}
//===============================================================





//==Update employee role. Working Properly====================
const updateEmployeeRole = () => {
    const query = "SELECT * FROM employeeTrackerDB.employee; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        employeeSelect();
    })
}

const employeeSelect = () => {
    inquirer.prompt([
        {
            name: 'empUpdate',
            type: 'input',
            message: "Please enter the id number of the employee whos role you'd like to change."
        },
    ])
        .then((answers) => {
            const query = `SELECT * FROM employeeTrackerDB.employee WHERE id = ${answers.empUpdate}; `;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res);
                empIdTemp.push(answers.empUpdate)
                displayRoles();
            })
        })
}

const displayRoles = () => {
    const query = "SELECT * FROM employeeTrackerDB.role; ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        newRoles();
    })
}


function newRoles() {
    inquirer.prompt([
        {
            name: 'newRole',
            type: 'input',
            message: `Please enter the role id for the employees new role.`
        },

    ])
        .then((answers) => {
            const query = `UPDATE employeeTrackerDB.employee SET role_id = ${answers.newRole} WHERE (id = ${empIdTemp});`;
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log('\n')
                console.log('  ================================Success!================================'.yellow);
                console.table(`                You have updated the employee's role!`.brightBlue);
                console.log('  ========================================================================'.yellow);
                console.log('\n ')
                runPrompt();
            })
        })
}
//===============================================================

