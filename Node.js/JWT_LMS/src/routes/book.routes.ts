import { Router } from "express";
import { BookController } from "../controller/books.controller";
import { varifyUserLogin, verifyAdmin } from "../middleware/middleware";

export const bookRouter = Router();

bookRouter.post("/books", varifyUserLogin, verifyAdmin, BookController.addBookHandler);
bookRouter.get("/books", varifyUserLogin, BookController.getAllBooksHandler);
bookRouter.get("/books/:id", varifyUserLogin, BookController.searchBookHandler);
bookRouter.delete("/books/:id", varifyUserLogin, verifyAdmin, BookController.removeBookHandler);
bookRouter.put("/books/:id", varifyUserLogin, verifyAdmin, BookController.updateBookHandler);

bookRouter.patch("/books/borrow/:id", varifyUserLogin, BookController.borrowBookHandler);
bookRouter.patch("/books/return/:id", varifyUserLogin, BookController.returnBookHandler);