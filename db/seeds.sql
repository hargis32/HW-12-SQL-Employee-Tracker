INSERT INTO department (department_name)
VALUES 
("Research & Development"),
("Engineering"),
("Sales"),
("Human Resources");

INSERT INTO emp_role (title, salary, department_id)
VALUES 
("Research Lead", 100000, 1),
("Head Mechanic", 300000, 2),
("Sales Rep", 25000, 3),
("The Karen", 10000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Bob", "Costas", 1, 4),
("Tony", "Dungee", 2, 4),
("Mike", "McCarthy", 3, 4),
("Karen", "Karen", 4, null);
