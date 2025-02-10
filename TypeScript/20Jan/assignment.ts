// 20Jan 
// Assignemet:


// Q1
function getLastElement<T>(arr:T[]):T | undefined{
    return arr.pop();
}

let num1:number[] = [1, 2, 3, 4, 5]
console.log(getLastElement<number>(num1));


// Q2

interface Product{
    id:number;
    name:string;
    price:number;
}

function displayProduct(product:Product):string{
    return `Product id : ${product.id}, Product name : ${product.name}, Product price : Rs.${product.price}`;
}

const product1:Product = {id :1, name:"Laptop", price:30000};
console.log(displayProduct(product1));


// Q3
enum OrderStatus {
    Pending,
    Shipped,
    Delivered
}

function order(status:OrderStatus): void{
    switch(status){
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
