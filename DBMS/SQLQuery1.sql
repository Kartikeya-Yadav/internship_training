--Assignment 1 Employee Table
create table employeeK (
	employee_id int primary key,
	name varchar(20),
	email varchar(20) unique,
	department varchar(10),
	salary decimal,
	joiningdate date
);

insert into employeeK (employee_id, name, email, department, salary, joiningdate) values
(1, 'Amit Sharma', 'amit.s@example.com', 'Sales', 55000.00, '2022-01-15'),
(2, 'Priya Verma', 'priya.v@example.com', 'HR', 62000.00, '2021-06-20'),
(3, 'Rahul Singh', 'rahul.s@example.com', 'IT', 75000.00, '2023-03-10'),
(4, 'Sneha Patel', 'sneha.p@example.com', 'Finance', 68000.00, '2020-11-05'),
(5, 'Vikram Gupta', 'vikram.g@example.com', 'Marketing', 53000.00, '2024-07-25');

select *
from employeek;

alter table employeek
add phone_number char(10);

EXEC sp_rename 'employeeK.name', 'employee_name', 'COLUMN';

delete from employeeK
where employee_id = 1;

drop table employeek;


--Assignment 2 Order Table
create table ordersk(
	order_id int primary key,
	customer_name varchar(20),
	product_name varchar(10),
	quantity int,
	price float,
	order_date date
);

insert into ordersk (order_id, customer_name, product_name, quantity, price, order_date) values
(1, 'Shri', 'Laptop', 1, 75000.00, '2025-02-10'),
(2, 'Jay', 'Tablet', 2, 30000.00, '2025-02-11'),
(3, 'Omkar', 'Phone', 3, 15000.00, '2025-02-12'),
(4, 'Ravi', 'Monitor', 1, 20000.00, '2025-02-13'),
(5, 'Prachi', 'Keyboard', 5, 2500.00, '2025-02-14'),
(6, 'Pratik', 'Mouse', 4, 1500.00, '2025-02-15'),
(7, 'Suyash', 'Printer', 2, 12000.00, '2025-02-16'),
(8, 'Parth', 'Speaker', 3, 3000.00, '2025-02-17'),
(9, 'Ayush', 'Headphone', 1, 5000.00, '2025-02-18'),
(10, 'Aishwarya', 'Camera', 1, 45000.00, '2025-02-19');

select *
from ordersk;

update ordersk
set quantity = 2
where customer_name = 'Shri';

delete from ordersk 
where customer_name = 'Jay';


--Assignment 3 Hospital Management
create table patientsk (
	patient_id int identity(1, 1) primary key,
	patient_name varchar(20),
	age int,
	disease varchar(10),
	doctor_assigned varchar(20)
	);

insert into patientsk (patient_name, age, disease, doctor_assigned) values
('Ravi Kumar', 25, 'Flu', 'Dr. Mehta'),
('Aisha Patel', 29, 'Covid-19', 'Dr. Khan'),
('Aarav Sharma', 30, 'Diabetes', 'Dr. Kapoor'),
('Meera Desai', 35, 'Asthma', 'Dr. Roy'),
('Rajiv Nair', 40, 'Cold', 'Dr. Khan'),
('Priya Joshi', 25, 'Migraine', 'Dr. Khan'),
('Sandeep Yadav', 40, 'Allergy', 'Dr. Roy');

select patient_name
from patientsk
where age > 60

select *
from patientsk
where doctor_assigned = 'Dr. Khan';

select disease, count(*)
from patientsk
group by disease;


--Assignment 4 Movie Booking (Savepoint)
create table bookingstable (
	booking_id int primary key,
	customer_name varchar(20),
	movie_name varchar(10),
	seates_booked int,
	total_price float
);

insert into bookingstable(booking_id, customer_name, movie_name, seates_booked, total_price) values
(1, 'Jay', 'Avatar', 3, 1200.00),
(2, 'Shri', 'Chaawa', 2, 800.00),
(3, 'Omkar', 'Titanic', 4, 1600.00),
(4, 'Parth', 'Matrix', 3, 1200.00);

select *
from bookingstable;


begin transaction;
save transaction savepoint01;


update bookingstable
set seates_booked = 1, total_price = 400.00
where booking_id = 4;


update bookingstable
set seats_book = 0, total_price = 0.0
where booking_id = 1;

rollback transaction savepoint01;

commit;





