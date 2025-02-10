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
var Category;
(function (Category) {
    Category[Category["Electronics"] = 0] = "Electronics";
    Category[Category["Clothing"] = 1] = "Clothing";
    Category[Category["Grocery"] = 2] = "Grocery";
})(Category || (Category = {}));
var Product = /** @class */ (function () {
    function Product(name, price, category, isavalabel) {
        this.productName = name;
        this.price = price;
        this.category = category;
        this.isavalabel = isavalabel;
    }
    return Product;
}());
var Catlog = /** @class */ (function () {
    function Catlog() {
        this.products = [];
    }
    Catlog.prototype.addProduct = function (item) {
        this.products.push(item);
        console.log("New Item Added");
    };
    Catlog.prototype.showProduct = function () {
        console.table(this.products);
    };
    return Catlog;
}());
var log = new Catlog();
var newItem01 = new Product("Saban", 200, Category.Grocery, true);
var newItem02 = new Product("Laptop", 10000, Category.Electronics, true);
log.addProduct(newItem01);
log.addProduct(newItem02);
log.showProduct();
