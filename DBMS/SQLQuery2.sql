-- Assignment: Bank Transactions
create table BankAccount_K(
	account_id int primary key,
	customer_name varchar(20),
	account_type varchar(10),
	balance decimal(10, 2)
);

insert into BankAccount_K (account_id, customer_name, account_type, balance) values
(1, 'Shri', 'Savings', 4000.00),
(2, 'Jay', 'Current', 25000.50),
(3, 'Omkar', 'Savings', 1500.75),
(4, 'Parth', 'Current', 10000.00),
(5, 'Pratik', 'Savings', 7000.25);

select *
from BankAccount_K;


-- Creating a transation for withdraw 5000
begin transaction;

declare @AccountID int = 1;
declare @WithdrawalAmount decimal(10, 2) = 5000.00;
declare @CurrentBalance decimal(10, 2);

-- Get current balance
select @CurrentBalance = balance 
from BankAccount_K 
where account_id = @AccountID;

-- Check if the account has balance 5000 and more.
if @CurrentBalance >= @WithdrawalAmount
begin
    -- Withdraw the amount
    UPDATE BankAccount_K
    set balance = balance - @WithdrawalAmount
    where account_id = @AccountID;

    commit transaction;
    print 'Withdrawal successful. Transaction committed.';
end
else
begin
    -- Rollback the transaction.
    rollback transaction;
    print 'Balance is less than 5000. Transaction rolled back.';
end;

select *
from BankAccount_K;


-- Primary key and Foreign key
create table departments_k(
	department_id int primary key,
	department_name varchar(20) not null
);

create table employee_k (
	employee_id int primary key,
	employee_name varchar(20) not null,
	age int check (age >= 18),
	salary decimal(10, 2) default 50000,
	department_id int,
	constraint fk_department_ foreign key (department_id) references departments_k(department_id)
);

insert into departments_k (department_id, department_name) values
(1, 'HR'),
(2, 'Development'),
(3, 'Testing');

insert into employee_k (employee_id, employee_name, age, salary, department_id) values
(1, 'Shri', 30, 60000, 1),
(2, 'Jay', 28, 65000, 2),
(3, 'Pratik', 35, 70000, 3);


select *
from employee_k;

insert into employee_k (employee_id, employee_name, age, salary, department_id) values
(4, 'Omkar', 25, 55000, 4),--error in insertion due to fk constraint
(5, 'Parth', 40, 80000, 1);


delete from departments_k
where department_id = 1;--error in deletion due to fk constraint


--Adding constraints after table creation
alter table employee_k add constraint PK_employee primary key (employee_id);

alter table employee_k add constraint FK_employee foreign key 
(department_id) references departments_k(department_id);

alter table employee_k add constraint UQ_name unique (employee_name);

alter table employee_k add constraint Ch_age check (age >=18);

--Removing constrains 
alter table employee_k drop constraint PK_employee;
alter table employee_k drop constraint FK_employee;
alter table employee_k drop constraint UQ_name;
alter table employee_k drop constraint Ch_age;