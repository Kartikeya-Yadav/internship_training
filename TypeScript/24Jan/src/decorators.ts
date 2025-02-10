// Access control System Using Decorators

//Define a method decorator for role based access controll.
function RequireRole(...roles: string[]) {
    return function(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const userRole = (this as any).role;
            //Cheak the roles.
            if(roles.indexOf(userRole) === -1) {
                console.error(`Access denied: User does not have the required role.`);
                return;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}

//Create enum for roles
enum Roles {
    Admin = "Admin",
    Manager = "Manager",
    Employee = "Employee"
}

//Create a user model
class UserPanel {
    id: number;
    name: string;
    role: Roles;

    constructor(id: number, name: string, role: Roles) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    viewReports() {
        console.log(`Reports Viewed...`);
    }
    
    //Function using decorators for Access control
    @RequireRole('Admin', 'Manager')
    editReports() {
        console.log(`Reports Edited...`);
    }

    //Function using decorators for Access control
    @RequireRole('Admin')
    deleteReports() {
        console.log(`Reports Deleted...`);
    }

}


const user01 = new UserPanel(111, "Zoro", Roles.Admin);
user01.deleteReports();

const user02 = new UserPanel(112, "Nami", Roles.Manager);
user02.editReports();
user02.deleteReports();  
