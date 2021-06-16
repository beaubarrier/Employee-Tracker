USE employeeTrackerDB;

-- Departments
INSERT INTO `employeeTrackerDB`.`department` (`id`, `name`) 
VALUES ('1', 'Leadership');
INSERT INTO `employeeTrackerDB`.`department` (`id`, `name`) 
VALUES ('2', 'Customer Service');
INSERT INTO `employeeTrackerDB`.`department` (`id`, `name`) 
VALUES ('3', 'Public Relations');
INSERT INTO `employeeTrackerDB`.`department` (`id`, `name`) 
VALUES ('4', 'Human Resources');
INSERT INTO `employeeTrackerDB`.`department` (`id`, `name`) 
VALUES ('5', 'Leadership');

-- Roles
INSERT INTO `employeeTrackerDB`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES ('1', 'Manager', '100', '1');
INSERT INTO `employeeTrackerDB`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES ('2', 'Engineer', '95', '1');
INSERT INTO `employeeTrackerDB`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES ('3', 'Specialist ', '20', '2');
INSERT INTO `employeeTrackerDB`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES ('4', 'Analyst', '90', '3');
INSERT INTO `employeeTrackerDB`.`role` (`id`, `title`, `salary`, `department_id`) 
VALUES ('5', 'HR Representative', '85', '4');

-- Employees
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('1', 'Bob', 'Saget', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('2', 'Dirk', 'McGurk', '2', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('3', 'Bob', 'Loblaw', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('4', 'Jim', 'Raynor', '3', '3');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('5', 'Scooby', 'Doo', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('6', 'Darth', 'Vader', '4', '5');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('7', 'Mooky', 'Betts', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('8', 'Wilford', 'Brimly', '5', '7');
