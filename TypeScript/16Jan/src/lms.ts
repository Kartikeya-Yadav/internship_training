enum Category {
    Fiction,
    SelfHelp,
    Poem
}

class Book {

    title: string;
    price:number;
    category:Category;
    isavalabel:boolean

    constructor(title:string, price:number, category:Category, isavalabel:boolean){
        this.title = title;
        this.price = price;
        this.category = category;
        this.isavalabel = isavalabel;

    }

}

class Librery{
    //books list
    private books:Book[] = [];

    //Adding a new Book 
    addBook(item:Book):void{
        if(this.books.some(book => book.title == item.title)){
            console.log(`Book ${item.title} already exists`);
            return;
        }
        this.books.push(item);
        console.log("New Item Added");
    }

    //Return all the book list
    listBook():Book[]{
        return this.books;
        // console.table(this.books);
    }

    //Search the books by title
    searchByTitle(title:string):Book[]{
        // const result = this.books.filter(book =>book.title.includes(title))
        // return result;
        const result:Book[] = [];
        this.books.forEach(element => {
            if(element.title==title){
                result.push(element)
            }
        });
        return result;
    }

    //Search the books by Category
    searchByCategory(category:Category):Book[]{
        // const result = this.books.filter(book =>book.category===category)
        // return result;
        const result:Book[] = [];
        this.books.forEach(element => {
            if(element.category===category){
                result.push(element)
            }
        });
        return result;
    }

    //Search the books by Avalability
    searchByAvlable(isavalabel:boolean):Book[]{
        // const result = this.books.filter(book =>book.isavalabel===isavalabel)
        // return result;
        const result:Book[] = [];
        this.books.forEach(element => {
            if(element.isavalabel===isavalabel){
                result.push(element)
            }
        });
        return result;
    }

    
} 

const librery:Librery = new Librery();


let bookItem1 = new Book("JAva", 200, Category.Fiction, true);
let bookItem2 = new Book("Why Am Doing this", 10000, Category.Poem, true);
librery.addBook(bookItem1);
librery.addBook(bookItem2);

console.table(librery.listBook());

console.table(librery.searchByTitle("JAva"));
console.table(librery.searchByAvlable(false));

