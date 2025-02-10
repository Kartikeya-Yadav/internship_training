//Assignment:
//Employee Management ad Analysis System


//1.Employee Management
//Enum for Roles
enum Roles{
    Manager = "Manager",
    Developer = "Developer",
    Intern = "Intern"
}

interface Employee{
    id: number;
    name: string;
    email: string;
    role: Roles;
    status: boolean;
}


//List of employees
const empList: Employee[] = [];

//Records of employees grouped by roles. Use of Record Utility.
const empRecord: Record<Roles, Employee[]> = {
    [Roles.Manager]: [],
    [Roles.Developer]:[],
    [Roles.Intern]: []
}

//Add employee in the list
function createEmployee(employee: Employee): void{
    empList.push(employee);
    console.log("Employee added. . .");
}


function getEmployeeByRole(role: Roles){
    empList.forEach(element => {
        empRecord[element.role].push(element);
    });
    // return empRecord;
    console.table(empRecord[role]);
}

//Update employee data. Use of Partial Utility.
function updateEmployee(employee: Employee, updates: Partial<Employee>): void {
    const index = empList.indexOf(employee);
    if(index !== -1){
        const updatedEmp: Employee = { ...employee, ...updates};
        console.log(`Updated Employee detais: `);
        console.log(updatedEmp);

        empList[index] = updatedEmp;
        console.log("Employee Updated...");

    }else{
        console.log("Employee Not in List. . .")
    }
}

//Dispaly employee summery: name and role. Use of Pick Utility.
type EmployeeSummery = Pick<Employee, "name" | "role">;
function displayEmployee(): void{
    const empSummeryList: EmployeeSummery[] = [];
    empList.forEach(element => {
        let empSummery: EmployeeSummery = {name: element.name, role: element.role};
        // console.table(empSummery);
        empSummeryList.push(empSummery);
    });
    // return empSummeryList;
    console.table(empSummeryList);
}


//2.Activity Tracking.
enum Tasks{
    "Leave Approval",
    "Development",
    "File Handle",
    "Debugging"  
}

interface LogData{
    id: number;
    task: Tasks | string;
    date: Date
    complitionStatus: boolean
}

//list of logs. Temp Log storage.
const logList: LogData[] = [];

//Creating new logs and adding to logList.
function createLog(EmpId: number, task: Tasks | string){
    empList.forEach(element => {
        //Cheak employee is present in list and status is active.
        if(element.id === EmpId && element.status === true){
            //"Leave Approveal" can only be done by manager.
            let approvalStatus: boolean = true
            if(element.role !== Roles.Manager && task === "Leave Approval"){
                approvalStatus = false;
                console.log("'Leave Approveal' can only be done by manager. . .");
            }
            const newDate = new Date();
            const newLog: LogData = {id: EmpId, task: task, date: newDate, complitionStatus: approvalStatus}
            logList.push(newLog);
            console.log("New log created. . .")
        }
        
    });
    
}

function displayLog(){
    // return logList;
    console.table(logList);
}


//3.Analytical Dashboard

function getEmployeeCount(){
    // return empList.length;
    console.log(empList.length);
}

function getActiveCount(){
    const result = empList.filter(element => element.status === true);
    // return result.length;
    console.log(result.length);
}



let emp01: Employee = {id: 1, name: "Jhon", email: "jhon@gmail", role:Roles.Developer, status:true};
let emp02: Employee = {id: 2, name: "Lufy", email: "lufy@gmail", role:Roles.Manager, status:true};
let emp03: Employee = {id: 3, name: "Zoro", email: "zoro@gmail", role:Roles.Intern, status:false};
let emp04: Employee = {id: 4, name: "Nami", email: "nami@gmail", role:Roles.Developer, status:true};
createEmployee(emp01);
createEmployee(emp02);
createEmployee(emp03);
createEmployee(emp04);

updateEmployee(emp01, {name: "Sanji", email: "sanji@gmail"});

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
