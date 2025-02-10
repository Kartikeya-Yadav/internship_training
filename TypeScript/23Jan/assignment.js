//Assignment:
//Employee Management ad Analysis System
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
//1.Employee Management
//Enum for Roles
var Roles;
(function (Roles) {
    Roles["Manager"] = "Manager";
    Roles["Developer"] = "Developer";
    Roles["Intern"] = "Intern";
})(Roles || (Roles = {}));
//List of employees
var empList = [];
//Records of employees grouped by roles. Use of Record Utility.
var empRecord = (_a = {},
    _a[Roles.Manager] = [],
    _a[Roles.Developer] = [],
    _a[Roles.Intern] = [],
    _a);
//Add employee in the list
function createEmployee(employee) {
    empList.push(employee);
    console.log("Employee added. . .");
}
function getEmployeeByRole(role) {
    empList.forEach(function (element) {
        empRecord[element.role].push(element);
    });
    // return empRecord;
    console.table(empRecord[role]);
}
//Update employee data. Use of Partial Utility.
function updateEmployee(employee, updates) {
    var index = empList.indexOf(employee);
    if (index !== -1) {
        var updatedEmp = __assign(__assign({}, employee), updates);
        console.log("Updated Employee detais: ");
        console.log(updatedEmp);
        empList[index] = updatedEmp;
        console.log("Employee Updated...");
    }
    else {
        console.log("Employee Not in List. . .");
    }
}
function displayEmployee() {
    var empSummeryList = [];
    empList.forEach(function (element) {
        var empSummery = { name: element.name, role: element.role };
        // console.table(empSummery);
        empSummeryList.push(empSummery);
    });
    // return empSummeryList;
    console.table(empSummeryList);
}
//2.Activity Tracking.
var Tasks;
(function (Tasks) {
    Tasks[Tasks["Leave Approval"] = 0] = "Leave Approval";
    Tasks[Tasks["Development"] = 1] = "Development";
    Tasks[Tasks["File Handle"] = 2] = "File Handle";
    Tasks[Tasks["Debugging"] = 3] = "Debugging";
})(Tasks || (Tasks = {}));
//list of logs. Temp Log storage.
var logList = [];
//Creating new logs and adding to logList.
function createLog(EmpId, task) {
    empList.forEach(function (element) {
        //Cheak employee is present in list and status is active.
        if (element.id === EmpId && element.status === true) {
            //"Leave Approveal" can only be done by manager.
            var approvalStatus = true;
            if (element.role !== Roles.Manager && task === "Leave Approval") {
                approvalStatus = false;
                console.log("'Leave Approveal' can only be done by manager. . .");
            }
            var newDate = new Date();
            var newLog = { id: EmpId, task: task, date: newDate, complitionStatus: approvalStatus };
            logList.push(newLog);
            console.log("New log created. . .");
        }
    });
}
function displayLog() {
    // return logList;
    console.table(logList);
}
//3.Analytical Dashboard
function getEmployeeCount() {
    // return empList.length;
    console.log(empList.length);
}
function getActiveCount() {
    var result = empList.filter(function (element) { return element.status === true; });
    // return result.length;
    console.log(result.length);
}
var emp01 = { id: 1, name: "Jhon", email: "jhon@gmail", role: Roles.Developer, status: true };
var emp02 = { id: 2, name: "Lufy", email: "lufy@gmail", role: Roles.Manager, status: true };
var emp03 = { id: 3, name: "Zoro", email: "zoro@gmail", role: Roles.Intern, status: false };
var emp04 = { id: 4, name: "Nami", email: "nami@gmail", role: Roles.Developer, status: true };
createEmployee(emp01);
createEmployee(emp02);
createEmployee(emp03);
createEmployee(emp04);
updateEmployee(emp01, { name: "Sanji", email: "sanji@gmail" });
displayEmployee();
getEmployeeByRole(Roles.Developer);
createLog(1, "Leave Approval");
createLog(2, "Leave Approval");
createLog(1, "Development");
createLog(3, "File Handle");
createLog(4, "Training");
displayLog();
getEmployeeCount();
getActiveCount();
