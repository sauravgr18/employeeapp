import { Request, Response, NextFunction } from "express";
export async function errorHandler(err:Error, req: Request, res: Response, next: NextFunction) {
    console.log("inside error handler");
    const error ={
        message:err.message,
    }
    console.log(error);
    res.status(500).json(error);
    
}