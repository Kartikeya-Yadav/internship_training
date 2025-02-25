-- Index in SQL
-- Functions, Stored Procedures and Triggers.

use JIBE_Main_Training;

select *
from employee_k;

exec sp_help employee_k;

set statistics io on;
set statistics time on;

-- Create table without index and primary key
CREATE TABLE EmployeeIndexExample (
    EmployeeID INT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    DepartmentID INT
);

--Add random 50 values in table
DECLARE @i INT = 1;
WHILE @i <= 50
BEGIN
    INSERT INTO EmployeeIndexExample (EmployeeID, FirstName, LastName, Email, DepartmentID)
    VALUES (
        @i,
        'FirstName' + SUBSTRING(CONVERT(VARCHAR(50), NEWID()), 1, 5),
        'LastName' + SUBSTRING(CONVERT(VARCHAR(50), NEWID()), 1, 5),
        'employee' + CAST(@i AS VARCHAR(10)) + SUBSTRING(CONVERT(VARCHAR(50), NEWID()), 1, 3) + '@example.com',
        ABS(CHECKSUM(NEWID())) % 10 + 1 -- Random department between 1 and 10
    );
    SET @i = @i + 1;
END;

select * from EmployeeIndexExample;

select *
from EmployeeIndexExample
where DepartmentID = 4 and Email = 'employee43201@example.com';


-- Create clustered index
create clustered index idx_EmployeeID on EmployeeIndexExample(EmployeeID);

select *
from EmployeeIndexExample
where DepartmentID = 4 and Email = 'employee43201@example.com';


-- Create nonclustered index
create nonclustered index idx_FirstName on EmployeeIndexExample(FirstName);

select *
from EmployeeIndexExample
where FirstName = 'FirstName8ACF3';


-- Create unique index
create unique index idx_Email on EmployeeIndexExample(Email);

select * 
from EmployeeIndexExample
where Email = 'employee43201@example.com';


-- Drop index
drop index idx_EmployeeID on EmployeeIndexExample;
drop index idx_FirstName on EmployeeIndexExample;
drop index idx_Email on EmployeeIndexExample;


-- Create Composite Index
create index idx_FirstName_LastName
on EmployeeIndexExample(LastName, FirstName);

select * 
from EmployeeIndexExample
where FirstName = 'FirstName8ACF3' and LastName = 'LastNameF1675';

drop index idx_FirstName_LastName on EmployeeIndexExample;


exec sp_help EmployeeIndexExample;

set statistics io off;
set statistics time off;


-- Functions 
create function fn_GetEmployeeFullName
(
    @EmployeeID int
)
returns varchar(100)
as
begin
    declare @FullName varchar(100);

    select @FullName = FirstName + ' ' + LastName
    from EmployeeIndexExample
    where EmployeeID = @EmployeeID;

    return @FullName;
end;

select dbo.fn_GetEmployeeFullName(2) as FullName;


create function fn_GetEmployeesByDepartment
(
    @DepartmentID int
)
returns table
as
return
(
    select EmployeeID, FirstName, LastName
    from EmployeeIndexExample
    where DepartmentID = @DepartmentID
);

select * from dbo.fn_GetEmployeesByDepartment(1);


-- Procedures
create procedure sp_GetEmployeeDetails
(
    @EmployeeID int
)
as
begin
    select EmployeeID, FirstName, LastName, DepartmentID
    from EmployeeIndexExample
    where EmployeeID = @EmployeeID;
end;

exec dbo.sp_GetEmployeeDetails @EmployeeID = 1;

create procedure sp_InsertEmployee
(
	@EmployeeID int,
    @FirstName varchar(50),
    @LastName varchar(50),
    @Email varchar(100),
    @DepartmentID int
)
as
begin
	insert into EmployeeIndexExample (EmployeeID, FirstName, LastName, Email, DepartmentID) values
    (@EmployeeID, @FirstName, @LastName, @Email, @DepartmentID);
end;

exec sp_InsertEmployee 
	@EmployeeID = 101,
    @FirstName = 'Shri',
    @LastName = 'Nashte',
    @Email = 'shri@gmail.com',
    @DepartmentID = 1;

select * 
from EmployeeIndexExample
where DepartmentID = 1;



-- Triggers
-- After Trigger
create trigger trg_InsertEmployee
on EmployeeIndexExample
after insert
as
begin
	print 'New row inserted in EmployeeIndexExample';
end;

insert into EmployeeIndexExample (EmployeeID, FirstName, LastName, Email, DepartmentID) values
(102, 'Jay', 'Gajarkar', 'jay@gmail.com', 2);


-- Instead of delete trigger
create trigger trg_InsteadOfDelete
on EmployeeIndexExample
instead of delete
as
begin
	update EmployeeIndexExample
	set DepartmentID = null
	where EmployeeID in (select EmployeeID from deleted);
end;

delete from EmployeeIndexExample
where FirstName = 'Jay';


-- DDL Trigger
CREATE TRIGGER trg_prevent_table_creation
ON DATABASE
FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE
AS 
BEGIN
   PRINT 'You can not create, drop and alter table in this database';
   ROLLBACK;
END;


-- Drop the trigger
SELECT name AS TriggerName,
       parent_class_desc AS Scope,
       create_date AS CreationDate
FROM sys.triggers
ORDER BY create_date;

drop trigger trg_InsteadOfDelete;
drop trigger trg_prevent_table_creation on database;



