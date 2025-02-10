class Book{
  
    constructor(id, title, author){
        this.bookId = id;
        this.title = title;
        this.author = author;
        this.isAvalable = true;
    }
}

class Member{

    constructor(id, name){
        this.memberId = id;
        this.name = name;
        this.borrowedBooks = [];
    }

}

class Library{

    constructor(){
        this.books = [];
        this.members = [];
    }

    //Add books to books list
    addBooks(id, title, author){
        let book = new Book(id, title, author);
        this.books.push(book);
        console.log("New Book Added");
    }

    //Add members to members list
    addMember(id, name){
        let member = new Member(id, name)
        this.members.push(member);
        console.log("New Member Added");
    }

    // Borrow the book from the lib
    borrowBook(memberId, bookId){
        this.members.forEach(memberelement => { 
            if(memberelement.memberId == memberId){ // Cheaking if member is in the member list
                this.books.forEach(bookElement => {
                    if(bookElement.bookId == bookId && bookElement.isAvalable ){ // Cheaking if book is in the list and avalabe status
                        memberelement.borrowedBooks.push(bookElement);
                        bookElement.isAvalable = false;
                        console.log("Book Assigned")
                        return(true);
                    }
                });
            }
        });
    }

    returnBook(memberId, bookId){
        this.members.forEach(memberelement => {
            if(memberelement.memberId == memberId){ // Cheaking if member is in the member list
                this.books.forEach(bookElement => {
                    if(bookElement.bookId == bookId){
                        let i = memberelement.borrowedBooks.indexOf(bookElement)
                        delete memberelement.borrowedBooks[i]// Deleting book from members list 
                        bookElement.isAvalable = true;// Changing is avalability status
                        console.log("Book Removed")
                        return(true);
                    }
                });
            }
        });
    }

    // Search a book by id
    searchBook(id){
        this.books.forEach(element => {
            if(element.bookId==id){
                console.table(element);
                return true;
            }
        });

    }

    // Printing all the book in list
    getAllBooks(){
        console.table(this.books);
    }

    // Printing all the members in the list
    getAllMembers(){
        console.table(this.members);
    }

}

const library = new Library();

library.addBooks(1, "Java", "RAja");
library.addBooks(2, "JavaScript", "Shyam");
library.addMember(23, "Ravi");


//To get all Details books 
library.getAllBooks()

//geytiing all members details
library.getAllMembers()


//
library.borrowBook(23, 2);

library.getAllMembers();

library.returnBook(23, 2);
library.getAllMembers();

library.searchBook(2);