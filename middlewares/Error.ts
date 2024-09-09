import { NextFunction, Request, Response } from "express";

export default class ErrorMiddleware {

  handel(req: Request, res: Response, next: NextFunction, err: Error) {
    if(req.originalUrl.startsWith('/api')) {
      res.status(500).json({ message: err.message });
    }

    next();
  }
}