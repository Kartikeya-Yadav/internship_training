import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const secretKey = "secretKey";


export const varifyUserLogin = (req: Request, res: Response, next: NextFunction) => {    
    const authHeader: string = req.headers["authorization"]!;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Access denied. No token Provided !" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, secretKey);
        req.body = decoded;
        console.log(req.body);
        
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token !" });
    }

}