var Category;
(function (Category) {
    Category[Category["Fiction"] = 0] = "Fiction";
    Category[Category["SelfHelp"] = 1] = "SelfHelp";
    Category[Category["Poem"] = 2] = "Poem";
})(Category || (Category = {}));
var Book = /** @class */ (function () {
    function Book(title, price, category, isavalabel) {
        this.title = title;
        this.price = price;
        this.category = category;
        this.isavalabel = isavalabel;
    }
    return Book;
}());
var Librery = /** @class */ (function () {
    function Librery() {
        //books list
        this.books = [];
    }
    //Adding a new Book 
    Librery.prototype.addBook = function (item) {
        if (this.books.some(function (book) { return book.title == item.title; })) {
            console.log("Book ".concat(item.title, " already exists"));
            return;
        }
        this.books.push(item);
        console.log("New Item Added");
    };
    Librery.prototype.listBook = function () {
        return this.books;
        // console.table(this.books);
    };
    Librery.prototype.searchByTitle = function (title) {
        // const result = this.books.filter(book =>book.title.includes(title))
        // return result;
        var result = [];
        this.books.forEach(function (element) {
            if (element.title == title) {
                result.push(element);
            }
        });
        return result;
    };
    Librery.prototype.searchByCategory = function (category) {
        // const result = this.books.filter(book =>book.category===category)
        // return result;
        var result = [];
        this.books.forEach(function (element) {
            if (element.category === category) {
                result.push(element);
            }
        });
        return result;
    };
    Librery.prototype.searchByAvlable = function (isavalabel) {
        // const result = this.books.filter(book =>book.isavalabel===isavalabel)
        // return result;
        var result = [];
        this.books.forEach(function (element) {
            if (element.isavalabel === isavalabel) {
                result.push(element);
            }
        });
        return result;
    };
    return Librery;
}());
var librery = new Librery();
var newItem001 = new Book("JAva", 200, Category.Fiction, true);
var newItem002 = new Book("Why Am Doing this", 10000, Category.Poem, true);
librery.addBook(newItem001);
librery.addBook(newItem002);
console.table(librery.listBook());
console.table(librery.searchByTitle("JAva"));
console.table(librery.searchByAvlable(false));
