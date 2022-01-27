DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE emp_role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY  KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
)