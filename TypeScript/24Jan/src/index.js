//TS Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logClass(target) {
    console.log("Method decorator. . .");
    console.log(target.name);
}
let MyClass = class MyClass {
    constructor(name) {
        this.name = name;
    }
};
MyClass = __decorate([
    logClass
], MyClass);
const obj1 = new MyClass("Zoro");
const obj2 = new MyClass("Lufy");
function Log(target, propertyKey, descriptor) {
    console.log('Method decorator. . .');
    console.log(target, propertyKey, descriptor);
}
class Car {
    drive() {
        console.log('Driving...');
    }
}
__decorate([
    Log
], Car.prototype, "drive", null);
function LogProperty(target, propertyName) {
    console.log('Property decorator. . .');
    console.log(target, propertyName);
}
class Bike {
    constructor() {
        this.color = "Blue";
    }
}
__decorate([
    LogProperty
], Bike.prototype, "color", void 0);
function LogParameter(target, methodName, parameterIndex) {
    console.log('Parameter decorator. . .');
    console.log(target, methodName, parameterIndex);
}
class Bus {
    drive(speed) {
        console.log(`Driving at ${speed} km/h`);
    }
}
__decorate([
    __param(0, LogParameter)
], Bus.prototype, "drive", null);
