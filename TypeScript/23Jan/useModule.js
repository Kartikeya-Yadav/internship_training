"use strict";
//importing the mathModule
Object.defineProperty(exports, "__esModule", { value: true });
var mathModule_1 = require("./mathModule");
// Useing the imported properties
console.log((0, mathModule_1.add)(20, 30));
console.log((0, mathModule_1.sub)(100, 40));
var Area;
(function (Area) {
    function areaOfCircle(radius) {
        return mathModule_1.Pi * Math.pow(radius, 2);
    }
    Area.areaOfCircle = areaOfCircle;
})(Area || (Area = {}));
console.log(Area.areaOfCircle(10));
