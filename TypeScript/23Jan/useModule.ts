//importing the mathModule

import {add, sub, Pi} from "./mathModule"

//Useing the imported properties
console.log(add(20, 30));
console.log(sub(100, 40));

//Trying namespace
export namespace Area{
    export function areaOfCircle(radius: number): number {
        return Pi*radius**2;
    }
}

console.log(Area.areaOfCircle(10));