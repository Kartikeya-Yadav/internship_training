
use JIBE_Main_Training;

create table Employee_ELMS(
	id int primary key,
	name varchar(50),
	email varchar(50),
	role varchar(20)
);

create table Leave_ELMS(
	id int primary key,
	emp_id int,
	start_date date,
	end_date date,
	leave_type varchar(50),
	status varchar(20),
	reason varchar(100)
	foreign key (emp_id) references Employee_ELMS(id)
);

INSERT INTO Employee_ELMS (id, name, email, role) VALUES 
(1, 'Jay Gajarkar', 'alice.johnson@example.com', 'Manager'),
(2, 'Bob Smith', 'bob.smith@example.com', 'Developer'),
(3, 'Charlie Brown', 'charlie.brown@example.com', 'Designer'),
(4, 'Diana Prince', 'diana.prince@example.com', 'QA Engineer'),
(5, 'Ethan Hunt', 'ethan.hunt@example.com', 'DevOps');

select *
from Employee_ELMS;

select *
from Leave_ELMS;