// //TS Decorators

// function logClass(target: Function){
//     console.log("Method decorator. . .");
//     console.log(target.name);
// }

// @logClass
// class MyClass{
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }

// }

// const obj1: MyClass = new MyClass("Zoro");
// const obj2: MyClass = new MyClass("Lufy");


// function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log('Method decorator. . .');
//     console.log(target, propertyKey, descriptor);
// }

// class Car {

//     @Log
//     drive() {
//         console.log('Driving...');
//     }
// }


// function LogProperty(target: any, propertyName: string) {
//     console.log('Property decorator. . .');
//     console.log(target, propertyName);
// }

// class Bike {
//     @LogProperty
//     color: string = "Blue";

// }

// function LogParameter(target: any, methodName: string, parameterIndex: number) {
//     console.log('Parameter decorator. . .');
//     console.log(target, methodName, parameterIndex);
// }

// class Bus {
//     drive(@LogParameter speed: number) {
//         console.log(`Driving at ${speed} km/h`);
//     }
// }

interface UserConstructor{
    new ( ...args: any[]): any;
}                    
 
 
function Entity(constructor: Function){    
    
}


 
 


   

