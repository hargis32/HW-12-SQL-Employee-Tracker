const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Hargis23!',
        database: 'employee_db'
    },
    console.log('connected to the database!')
);

db.connect(function (err) {
    if (err) throw err;
    startInquire();
})

const startInquire = () => {
    inquirer
    .prompt([
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
    .then(function (answer) {
        switch (answer.todo) {
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

const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: "department_name",
                type: "input",
                message: "What department would you like to add?"
            }
        ])
        .then(function (answer) {
            db.query('INSERT INTO department SET ?',
            {
                department_name: answer.department_name
            },
            function (err, res) {
                if (err) throw err;
                startInquire();
            });
        });
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What role would you like to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for this new role?"
            },
            {
                name: "department_id",
                type: "input",
                message: "What department does this role belong to?"
            }
        ])
        .then(function (answer) {
            db.query('INSERT INTO emp_role SET ?', 
            {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.department_id
            },
            function (err, res) {
                if (err) throw err;
                startInquire();
            });
        });
};

const addEmployee = () => {
    inquirer
        .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "What is the employee's first name?"
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "What is the employee's last name?"
                },
                {
                    name: "role_id",
                    type: "input",
                    message: "What is the employee's role id?"
                }
            ])
            .then(function(answer) {
                db.query("INSERT INTO employee SET ?", 
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id
                },
                function (err, res) {
                    if (err) throw err;
                    startInquire();
                });
            });
    };

