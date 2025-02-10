//20Jan
//Assignment 2
//Building a User Management Module
//Creating enum for roles.
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["Manager"] = 1] = "Manager";
    Roles[Roles["Employee"] = 2] = "Employee";
})(Roles || (Roles = {}));
//Userlist to store users
var userList = [];
//Fuction to add users in list
function createUser(value) {
    userList.push(value);
    return value;
}
//Display all users
function showAllusers() {
    console.log("User List :");
    console.log(userList);
    return userList;
}
//Filter and display users accourding to role
function filterByRole(role) {
    var result = userList.filter(function (userElement) { return userElement.role == role; });
    console.log("Users of the Role: ".concat(Roles[role]));
    console.log(result);
    return result;
}
var newUser01 = { id: 1, name: "Jhon", email: "jhon@mail", role: Roles.Manager };
var newUser02 = { id: 2, name: "Alain", email: "alaion@mail", role: Roles.Employee };
var newUser03 = { id: 3, name: "Ravi", email: "ravi@mail", role: Roles.Manager };
var newUser04 = { id: 4, name: "Shyam", email: "shaym@mail", role: Roles.Employee, phoneNumber: "2345678987" };
createUser(newUser01);
createUser(newUser02);
createUser(newUser03);
createUser(newUser04);
showAllusers();
filterByRole(Roles.Manager);
