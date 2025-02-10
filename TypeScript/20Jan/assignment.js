// 20Jan Assignemet
// Q1
function lastEle(arr) {
    return arr.pop();
}
var num1 = [1, 2, 3, 4, 5];
console.log(lastEle(num1));
function displayProduct(product) {
    return "Product id : ".concat(product.id, ", Product name : ").concat(product.name, ", Product price : Rs.").concat(product.price);
}
var product1 = { id: 1, name: "Laptop", price: 30000 };
console.log(displayProduct(product1));
// Q3
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
function order(status) {
    switch (status) {
        case 0:
            console.log(OrderStatus[0]);
            break;
        case 1:
            console.log(OrderStatus[1]);
            break;
        case 2:
            console.log(OrderStatus[2]);
            break;
        default:
            console.log("Wrong Input. . .");
            break;
    }
}
order(0);
order(OrderStatus.Shipped);
console.log(typeof (OrderStatus.Delivered));
