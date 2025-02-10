//20Jan
//Assignment 2
//Building a User Management Module

//Creating enum for roles.
enum Roles{
    Admin,
    Manager,
    Employee
}

//Creating user inteface template.
interface User{
    id:number;
    name:string;
    email:string;
    role:Roles;
    phoneNumber?:string;
}

//Userlist to store users
const userList:User[]= [];

//Fuction to add users in list
function createUser(value:User){
    userList.push(value);
    return value;
}

//Display all users
function showAllusers(){
    console.log("User List :");
    console.log(userList);
    return userList;
}

//Filter and display users accourding to role
function filterByRole(role:Roles){
    const result = userList.filter((userElement) => userElement.role == role);
    console.log(`Users of the Role: ${Roles[role]}`);
    console.log(result);
    return result;
    
}

 
let newUser01 = {id:1, name:"Jhon", email:"jhon@mail", role:Roles.Manager};
let newUser02 = {id:2, name:"Alain", email:"alaion@mail", role:Roles.Employee};
let newUser03 = {id:3, name:"Ravi", email:"ravi@mail", role:Roles.Manager};
let newUser04 = {id:4, name:"Shyam", email:"shaym@mail", role:Roles.Employee, phoneNumber:"2345678987"};

createUser(newUser01);
createUser(newUser02);
createUser(newUser03);
createUser(newUser04);

showAllusers();

filterByRole(Roles.Manager);

