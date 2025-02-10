console.log("Hello World");

console.log(document.getElementById("demo").innerHTML);

function show(){
    alert("Butten Clicked");
}

function chagneBgColor(colour='White'){
    document.body.style.backgroundColor = colour;
}


// let redius = parseFloat(prompt("Enter the Radius"));

// function areaOfCircle(redius){
//     return 3.14*redius*redius;
// }
// alert(areaOfCircle(redius));

let hi;
hi = 2.2234

console.log(hi);
console.log(typeof(hi));

let dateToday = Date();
console.log(dateToday.toString());


function add(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    const result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function evenOdd(){
    const num = parseInt(document.getElementById("num").value)
    if (num%2==0){
        document.getElementById("ans").innerHTML = "Even";
    }
    else {
        document.getElementById("ans").innerHTML = "Odd";
    }
}

function displayNameAge(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    alert(`Hi ${name}. Your age is ${age}`);
}

function validateDate(){
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month==2 && day<=29 && (year%400==0 || (year%4==0 && year%100!=0)) ){
        document.getElementById("validation").innerHTML = "Valid";
    }
    else if(months>12 || day>months[month-1] ){
        document.getElementById("validation").innerHTML = " Not Valid";
    }
    else{
        document.getElementById("validation").innerHTML = "Valid"
    }
    
}

let myName = 133

{
    let myName = 666
    console.log(myName);
}

console.log(myName)
let x =20;
function myFistFun(){
    let x =10;
    return console.log(x);
    
}



