USE employeeTrackerDB;

-- Departments
INSERT INTO `employeeTrackerDB`.`department` (`name`) 
VALUES ('Leadership');
INSERT INTO `employeeTrackerDB`.`department` (`name`) 
VALUES ('Customer Service');
INSERT INTO `employeeTrackerDB`.`department` (`name`) 
VALUES ('Public Relations');
INSERT INTO `employeeTrackerDB`.`department` (`name`) 
VALUES ('Human Resources');
INSERT INTO `employeeTrackerDB`.`department` (`name`) 
VALUES ('Development Team');

-- Roles
INSERT INTO `employeeTrackerDB`.`role` (`title`, `salary`, `department_id`) 
VALUES ('Manager', '100', '1');
INSERT INTO `employeeTrackerDB`.`role` (`title`, `salary`, `department_id`) 
VALUES ('Specialist', '95', '2');
INSERT INTO `employeeTrackerDB`.`role` (`title`, `salary`, `department_id`) 
VALUES ('Analyst ', '20', '3');
INSERT INTO `employeeTrackerDB`.`role` (`title`, `salary`, `department_id`) 
VALUES ('HR Rep', '90', '4');
INSERT INTO `employeeTrackerDB`.`role` (`title`, `salary`, `department_id`) 
VALUES ('Engineer', '85', '5');

-- Employees
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Bob', 'Saget', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Dirk', 'McGurk', '2', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Bob', 'Loblaw', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Jim', 'Raynor', '3', '3');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Scooby', 'Doo', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Darth', 'Vader', '4', '5');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Mooky', 'Betts', '1', '1');
INSERT INTO `employeeTrackerDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) 
VALUES ('Wilford', 'Brimly', '5', '7');
