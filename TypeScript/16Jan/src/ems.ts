//This is Employee Management System

enum Role {
    Manager,
    Developer,
    Designer, 
    Tester,
    HR
}

interface Employee {
    id:number;
    name:string;
    role:Role;
    salary:number;
    isActive:boolean;
}

class EmpManagement{
    //Priavte employee list
    private employees:Employee[] = [];

    //Adding employees in the lists. 
    addEmployee(emp:Employee):void{
        //First cheak if emp already present.
        if(this.employees.some(employee => employee.id === emp.id)){
            console.log(`This ${emp.id} already exists`);
            return;
        }
        this.employees.push(emp);
        console.log("New Employee Added");
    }

    //Return list of all employees
    listAllEmployee():Employee[]{
        return this.employees;
    }

    //Filter emp accourding to roles.
    filterEmployeeByRole(role:Role){
        const result = this.employees.filter(employee => employee.role===role);
        if(result.length){
            return result;//Returns list of given role.
        }
        else{
            console.log("This Role is NOT in System.")
        }
    }

    //Filter emp accourding to Status.
    filterEmployeeByStatus(status:boolean){
        const result = this.employees.filter(employee => employee.isActive===status);
        if(result.length){
            return result;//Returns list of given Status.
        }
        else{
            console.log("This Status is NOT in System.")
        }
    }

    // Update employee satus 
    updateEmployeeStatus(id: number, status: boolean) {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index !== -1) {
            this.employees[index].isActive = status;
            return true;  //Emp status Successfully updated
        }
        return false;  // Employee not found
    }
    
    //Count total salary of all active emp.
    calTotalSalary():number{
        const result = this.employees
            .filter(employee => employee.isActive===true)

        let totalSalary = 0;//Add the salery of all active employees
        result.forEach(employee => {
            totalSalary += employee.salary
        });
        return totalSalary;
    }

}

const management:EmpManagement = new EmpManagement();


// 
management.addEmployee({ id:1, name:"Sudhir", role:Role.Developer, salary:1200, isActive:true});
management.addEmployee({ id:2, name:"Shyam", role:Role.Designer, salary:1000, isActive:true});
