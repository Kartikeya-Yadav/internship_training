// let myNum:number = 20;
// console.log(myNum);
// let name1:string = "Kartikeya";
// console.log(name1);
// let myVar:null;
// let arr:number[] = [1, 2, 3];
// arr[3] = 4;
// arr.push(5);
// console.log(arr);
// let person:[number, string] = [1, "jhon"];
// person.push("alain", 23);
// console.log(person);
// let user:{id:number, useName:string, age:number};
// user = {
//     id: 1, 
//     useName: "jhon",
//     age: 18
// }
//Union
// let empId: number|string;
// empId = 101;
// console.log(empId);
// console.log(typeof(empId));
// empId = "101";
// console.log(empId);
// console.log(typeof(empId));
// //
// interface Address{
//     city:string;
//     post:number;
// }
// interface Coordinates{
//     longitude: number;
//     latitude: number;
// }
// type location = Address & Coordinates;
// let myLocation:location = {
//     city : "mumbai",
//     post : 234566,
//     longitude: 12,
//     latitude: 34
// };
// console.log(myLocation);
// console.log(typeof(myLocation));
// //liters
// type direction ="up"|"down"|"left"|"right";
// let dir: direction = "up";
// type direct ={
//     id : number,
//     name : string
// }
// const you: direct = {
//     id : 1,
//     name :"qwet"
// };
// function add(num1:number = 1, num2:number = 2){
//     return num1+num2;
// }
// console.log(add(undefined, 23));
// const sub = (num1:number, num2:number): number => num1-num2;
// Generics
function indentify(value) {
    return value;
}
console.log(indentify("Please..."));
console.log(indentify(333));
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var stringBox = new Box("WhoAmI");
console.log(stringBox.getValue());
