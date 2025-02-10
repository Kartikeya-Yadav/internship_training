// let myName: string = "Shantanu";

// const sayHI = function(myName: string){
//     console.log(`HI ${myName}. Wlcome to typescript.`)
// }

// sayHI(myName);

// enum Status{
//     Active,

// }

// let obj:{name:string, age:number} = {
//     name : "NahiBatunga",
//     age:23
// };

// console.log(obj);

// interface myobj {
//     emp:string;
//     salary:number
// }

// Uaing enum constunts
enum Categorys {
    Electronics,
    Clothing,
    Grocery
}

class Product {

    productName: string;
    price:number;
    Categorys:Categorys;
    isavalabel:boolean

    constructor(name:string, price:number, Categorys:Categorys, isavalabel:boolean){
        this.productName = name;
        this.price = price;
        this.Categorys = Categorys;
        this.isavalabel = isavalabel;

    }

}

class Catlog{
    
    //Products list
    private products:Product[] = [];

    //Adding a new product 
    addProduct(item:Product):void{
        if(this.products.some(p => p.productName == item.productName)){
            console.log(`Product ${item.productName} already exists`);
            return;
        }
        this.products.push(item);
        console.log("New Item Added");
    }

    //Show all the book list
    showProduct(){
        console.table(this.products);
    }
}

const log:Catlog = new Catlog();


let newItem01 = new Product("Saban", 200, Categorys.Grocery, true);
let newItem02 = new Product("Laptop", 10000, Categorys.Electronics, true);
log.addProduct(newItem01);
log.addProduct(newItem02);

log.showProduct();

