//This is Employee Management System
var Role;
(function (Role) {
    Role[Role["Manager"] = 0] = "Manager";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Designer"] = 2] = "Designer";
    Role[Role["Tester"] = 3] = "Tester";
    Role[Role["HR"] = 4] = "HR";
})(Role || (Role = {}));
var EmpManagement = /** @class */ (function () {
    function EmpManagement() {
        //Priavte employee list
        this.employees = [];
    }
    //Adding employees in the lists. 
    EmpManagement.prototype.addEmployee = function (emp) {
        //First cheak if emp already present.
        if (this.employees.some(function (employee) { return employee.id === emp.id; })) {
            console.log("This ".concat(emp.id, " already exists"));
            return;
        }
        this.employees.push(emp);
        console.log("New Employee Added");
    };
    //Return list of all employees
    EmpManagement.prototype.listAllEmployee = function () {
        return this.employees;
    };
    //Filter emp accourding to roles.
    EmpManagement.prototype.filterEmployeeByRole = function (role) {
        var result = this.employees.filter(function (employee) { return employee.role === role; });
        if (result.length) {
            return result; //Returns list of given role.
        }
        else {
            console.log("This Role is NOT in System.");
        }
    };
    //Filter emp accourding to Status.
    EmpManagement.prototype.filterEmployeeByStatus = function (status) {
        var result = this.employees.filter(function (employee) { return employee.isActive === status; });
        if (result.length) {
            return result; //Returns list of given Status.
        }
        else {
            console.log("This Status is NOT in System.");
        }
    };
    // Update employee satus 
    EmpManagement.prototype.updateEmployeeStatus = function (id, status) {
        var index = this.employees.findIndex(function (employee) { return employee.id === id; });
        if (index !== -1) {
            this.employees[index].isActive = status;
            return true; //Emp status Successfully updated
        }
        return false; // Employee not found
    };
    //Count total salary of all active emp.
    EmpManagement.prototype.calTotalSalary = function () {
        var result = this.employees
            .filter(function (employee) { return employee.isActive === true; });
        var totalSalary = 0; //Add the salery of all active employees
        result.forEach(function (employee) {
            totalSalary += employee.salary;
        });
        return totalSalary;
    };
    return EmpManagement;
}());
var management = new EmpManagement();
// 
management.addEmployee({ id: 1, name: "Sudhir", role: Role.Developer, salary: 1200, isActive: true });
management.addEmployee({ id: 2, name: "Shyam", role: Role.Designer, salary: 1000, isActive: true });
