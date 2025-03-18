import { ConnectionPool } from "mssql";
import { poolPromise } from "../config/dbConfig";

export class BooksRepository {
    static async addBook(book: any){
        try {
            const pool = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", book.id)
                .input("title", book.title)
                .input("auther", book.auther)
                .input("status", "Available")
                .query("insert into LMS_Books (id, title, auther, status) values(@id, @title, @auther, @status)")
        } catch (err) {
            throw err;
        }
    }

    static async removeBook(id: number){
        try {
            const pool = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", id)
                .query("delete from LMS_Books where id = @id");
        } catch (err) {
            throw err;
        }
    }

    static async SearchBook(id: number){
        try {
            const pool = await poolPromise;
            const result = await (pool as ConnectionPool).request()
                .input("id", id)
                .query("select * from LMS_Books where id = @id");
            return result.recordset[0];
        } catch (err) {
            throw err;
        }
    }

    static async viewAllBooks(){
        try {
            const pool = await poolPromise;
            const result = await (pool as ConnectionPool).request()
                .query("select * from LMS_Books")
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async updateBook(id: number, book: any){
        try {
            console.log(book);
            
            const pool = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", id)
                .input("title", book.title)
                .input("auther", book.auther)
                .input("status", book.status)
                .query("update LMS_Books set title = @title, auther = @auther, status = @status where id = @id");
        } catch (err) {
            throw err;
        }
    }

    static async updateStatus(id: number, status: string){
        try {
            const pool = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", id)
                .input("status", status)
                .query("update LMS_Books set status = @status where id = @id");
        } catch (err) {
            throw err;
        }
    }


}