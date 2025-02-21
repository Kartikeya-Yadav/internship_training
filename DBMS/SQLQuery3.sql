-- Nested Queries, Views and Joins

select * 
from employee_k;

alter table employee_k
add city varchar(10);

insert into employee_k (employee_id, employee_name, age, salary, department_id, city) values
(1, 'John Doe', 30, 55000, 1, 'Mumbai'),
(2, 'Jane Smith', 25, 60000, 2, 'Pune'),
(3, 'Amit Kumar', 28, 50000, 1, 'Delhi'),
(4, 'Sunita Reddy', 35, 75000, 3, 'Pune'),
(5, 'Rahul Desai', 40, 90000, 2, 'Delhi'),
(6, 'Priya Singh', 29, 48000, 2, 'Bangalore'),
(7, 'Arjun Patel', 33, 67000, 1, 'Delhi'),
(8, 'Meena Gupta', 27, 51000, 3, 'Pune'),
(9, 'Vikas Joshi', 32, 64000, 3, 'Mumbai'),
(10, 'Nina Mehta', 24, 55000, 2, 'Mumbai');


-- Select max salary in each city
select max(salary) as max_salary, city
from employee_k
group by city;

select employee_name, salary, city
from employee_k
where salary in (select max(salary) 
				 from employee_k 
				 group by city);



-- View

create view myview as
select employee_name 
from employee_k;

select *
from myview;

update myview
set employee_name = 'Ravi Kumar'
where employee_name = 'John Doe';

select *
from employee_k;


-- Assignment: SQL subquries and views in BookStore Managenment system
create table bookstore_books(
	book_id int primary key,
	title varchar(10) not null,
	auther varchar(20),
	price decimal(5, 2),
	quantity int
);

create table bookstore_customers(
	cusromer_id int primary key,
	cusromer_name varchar(20) not null,
	email varchar(20)
);

EXEC sp_RENAME 'bookstore_customers.cusromer_id', 'customer_id', 'COLUMN';
EXEC sp_RENAME 'bookstore_customers.cusromer_name', 'customer_name', 'COLUMN';

create table bookstore_orders (
    order_id int primary key,
    customer_id int,
    book_id int,
    order_date date,
    foreign key (customer_id) references bookstore_customers(customer_id),
    foreign key (book_id) references bookstore_books(book_id)
);

select * 
from bookstore_customers;

insert into bookstore_books (book_id, title, auther, price, quantity) values
(1, 'JavaScript', 'George Orwell', 345.5, 10),
(2, 'SQL', 'Harper Lee', 234.5, 0),
(3, 'TypeScript', 'F. Scott', 65.99, 15),
(4, 'Angular', 'Jane Austen', 45.99, 12),
(5, 'Node.js', 'J.R.R. Tolkien', 238.99, 7);

insert into bookstore_customers (customer_id, customer_name, email) VALUES
(1, 'Shri', 'shri@gmail.com'),
(2, 'Jay', 'jay@gmail.com'),
(3, 'Omkar', 'omkar@gmail.com'),
(4, 'Parth', 'parth@gmail.com'),
(5, 'Pratik', 'pratik@gmail.com');

insert into bookstore_orders (order_id, customer_id, book_id, order_date) values
(1, 1, 1, '2025-01-10'),
(2, 2, 3, '2025-01-11'),
(3, 3, 3, '2025-01-12'),
(4, 4, 4, '2025-01-13');

-- Task 1 - Active Customers.
select *
from bookstore_customers
where customer_id in (select customer_id
					  from bookstore_orders);

-- Task 2 - Books that not ordered.
select *
from bookstore_books
where book_id not in (select book_id
					  from bookstore_orders);

-- Task 3 - Books that out of stock.
select *
from bookstore_books
where quantity = 0;

-- Task 4 - View
create view bookstore_order_summary as
select bo.order_id,
	   bc.customer_name,
       bb.title AS book_title,
       bo.order_date
from bookstore_orders bo
join bookstore_customers bc on bo.customer_id = bc.customer_id
join bookstore_books bb on bo.book_id = bb.book_id;

select *
from bookstore_order_summary;

-- Task 5 - Most Expencive Book.
select title, price
from bookstore_books
where price = (select max(price)
			   from bookstore_books);


-- Task 6
-- 1. Customers who never placed an Order (left join)
select bc.customer_name
from bookstore_customers bc
left join bookstore_orders bo ON bc.customer_id = bo.customer_id
where bo.customer_id is null;



-- Assignment: Employee management system 

create table employee_ems(
	employee_id int primary key,
	name varchar(20),
	department_id int,
	manager_id int,
	hiredate date,
	foreign key (department_id) references department_ems(department_id),
    foreign key (manager_id) references employee_ems(employee_id)
);

create table department_ems(
	department_id int primary key,
	department_name varchar(20)
);

create table salary_ems(
	employee_id int primary key,
	base_salary decimal(10, 2),
	bonus decimal(10, 2),
	foreign key (employee_id) references employee_ems(employee_id)
);


insert into department_ems (department_id, department_name) values
(1, 'HR'),
(2, 'Development'),
(3, 'Testing'),
(4, 'Sales');


-- Insert data into employee_ems table
insert into employee_ems (employee_id, name, department_id, manager_id, hiredate) values
(1, 'Alice', 1, NULL, '2022-01-15'),
(2, 'Bob', 2, 1, '2022-03-10'),
(3, 'Charlie', 3, 1, '2022-05-20'),
(4, 'David', 2, 2, '2022-07-30'),
(5, 'Eve', 4, 2, '2022-09-25'),
(6, 'Frank', 1, 3, '2022-11-10'),
(7, 'Grace', 3, 3, '2023-01-18'),
(8, 'Hank', 2, 4, '2023-03-25'),
(9, 'Ivy', 4, 5, '2023-05-22'),
(10, 'Jack', 1, 6, '2023-07-30');


insert into salary_ems (employee_id, base_salary, bonus) values
(1, 60000, 5000),
(2, 80000, 7500),
(3, 75000, 7000),
(4, 85000, 8000),
(5, 70000, 6000),
(6, 65000, 5500),
(7, 72000, 6200),
(8, 82000, 7700),
(9, 69000, 5800),
(10, 66000, 5300);


-- Task 1 -Emp names and their departments using inner join.
select emp.name, dept.department_name, emp.hiredate
from employee_ems as emp 
inner join department_ems as dept on emp.department_id = dept.department_id;

-- Task 2 -Emp without a manager
select employee_id, name
from employee_ems
where manager_id is null;

-- Task 3 -Departments without employee
select dept.department_name
from department_ems as dept 
left join employee_ems as emp on dept.department_id = emp.department_id
where emp.department_id is null;

-- Task 4 -Total Salaery of each emp.
select emp.name, (sal.base_salary + sal.bonus) as total_salary
from employee_ems as emp
join salary_ems as sal on emp.employee_id = sal.employee_id;

-- Task 5 -Emp with highest salary.
select emp.name, sal.base_salary, sal.bonus
from employee_ems as emp
join salary_ems as sal on emp.employee_id = sal.employee_id
where sal.base_salary = (
	select max(base_salary)
	from salary_ems
);

-- Task 6 -Emp earning more than their manager
select emp.employee_id, emp.name, emp.department_id, emp.hiredate, sal.base_salary
from employee_ems emp
inner join salary_ems sal on emp.employee_id = sal.employee_id
where sal.base_salary > (
    select ms.base_salary
    from employee_ems m
    inner join salary_ems ms on m.employee_id = ms.employee_id
    where m.employee_id = emp.manager_id
);

-- Task 7 -View 
create view EmployeeSalaryView_ems as
select emp.employee_id, emp.name, dept.department_name, sal.base_salary, sal.bonus, (sal.base_salary + sal.bonus) as Total_salary
from employee_ems emp
inner join salary_ems as sal on emp.employee_id = sal.employee_id
inner join department_ems as dept on dept.department_id = emp.department_id;

select *
from EmployeeSalaryView_ems;

-- Task 8 -Emp working more tha 3years
select employee_id, name, department_id, hiredate
from employee_ems
where datediff(year, hiredate, '2025-02-21') > 3;

-- Task 9 -Emp no of each dept -Group by.
select dept.department_name, count(emp.employee_id)
from department_ems as dept 
left join employee_ems as emp on dept.department_id = emp.department_id
group by dept.department_name;