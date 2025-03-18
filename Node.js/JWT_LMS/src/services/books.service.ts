import { BooksRepository } from "../repository/books.repository";

export class BooksService{
    static async addBook(book: any){
        try{
            await BooksRepository.addBook(book);
            return `Book added successfully !`;
        }catch(err){
            throw err;
        }
    }

    static async removeBook(id: number){
        try{
            await BooksRepository.removeBook(id);
            return `Book removed successfully !`;
        }catch(err){
            throw err;
        }
    }

    static async updateBook(id: number, book: any){
        try{
            await BooksRepository.updateBook(id, book);
            return `Book Updated successfully !`
        }catch(err){
            throw err;
        }
    }

    static async searchBook(id: number){
        try{
            const result = await BooksRepository.SearchBook(id);
            return result;
        }catch(err){
            throw err;
        }
    }

    static async viewAllBooks(){
        try{
            const result = await BooksRepository.viewAllBooks();
            return result;
        }catch(err){
            throw err;
        }
    }

    static async barrowBook(id: number){
        try{
            const result = await BooksRepository.SearchBook(id);
            if(!result || result.status !== "Available"){
                return "This book not available !";
            }
            
            await BooksRepository.updateStatus(id, "Borrowed");
            return "This Book allotted to you !"
            
        }catch(err){
            throw err;
        }
    }

    static async returnBook(id: number){
        try{
            const result = await BooksRepository.SearchBook(id);
            if(!result || result.status !== "Borrowed"){
                return "This book is not allotted !";
            }
            
            await BooksRepository.updateStatus(id, "Borrowed");
            return "This Book allotted to you !"
        }catch(err){
            throw err;
        }
    }
}