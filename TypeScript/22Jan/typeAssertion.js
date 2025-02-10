var userdata = { salary: "3000", name: "Jhon" };
var user01 = userdata;
console.log(user01);
//Type casting
var data = parseInt("12234");
console.log(data * 2);
var value = "hi";
var strlen = value.length;
var mixarray = [1, "two", 3];
var strarray = mixarray;
console.log(strarray);
//Type assertion
var myvalue = "Hello World";
myvalue = 10;
var len = myvalue.length; //Will generate error at runtime
var myvalue1 = "Hello World";
myvalue1 = 10;
// let len1: number = myvalue1.length; //Generaing error at compile time.
var len1 = myvalue.length;
console.log(len1);
