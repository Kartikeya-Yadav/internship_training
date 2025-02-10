let arr = new Array(1, 2,"asd");

arr.splice(1, 56, "Ram", "JAy");

arr.forEach((element, index) => {
    console.log(index, typeof(element))
});
console.log(arr);

let [a, b, c] = arr;

console.log(a, b, c)