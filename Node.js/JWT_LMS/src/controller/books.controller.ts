import { Request, Response } from "express";
import { BooksService } from "../services/books.service";

export class BookController {
    static async addBookHandler(req: Request, res: Response){
        try{
            const book = req.body;
            const result = await BooksService.addBook(book);
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }

    static async removeBookHandler(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const result = await BooksService.removeBook(id);
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }

    static async searchBookHandler(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const result = await BooksService.searchBook(id);
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }

    static async getAllBooksHandler(req: Request, res: Response){
        try{
            const result = await BooksService.viewAllBooks();
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }

    static async updateBookHandler(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const book = req.body;
            
            const result = await BooksService.updateBook(id, book)
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }

    static async borrowBookHandler(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const result = await BooksService.barrowBook(id);
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }

    static async returnBookHandler(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const result = await BooksService.returnBook(id);
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({error: (err as Error).message})
        }
    }





    
}