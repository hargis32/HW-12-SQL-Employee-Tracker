const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log('connected to the database!')
);

db.connect(function (err) {
    if (err) throw err;
    startInquire();
})

const startInquire = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do?",
            name: "todo",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"
            ]
        }
    ])
    .then(function (todo) {
        switch (todo.choice) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateEmployee();
                break;
            case "Exit":
                db.end();
                break;
        }
    })
   };

   const viewDepartments = () => {
       db.query('SELECT * FROM department', function (err, res) {
           if (err) throw err;
           console.table(res);
           startInquire();
       })
   };

   const viewRoles = () => {
    db.query('SELECT * FROM emp_role', function (err, res) {
        if (err) throw err;
        console.table(res);
        startInquire();
    })
};

const viewEmployees = () => {
    db.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
        startInquire();
    })
};
