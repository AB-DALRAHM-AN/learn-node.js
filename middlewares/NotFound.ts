import { NextFunction, Request, Response } from "express";

export default class NotFoundMiddleware {
  static handle(req: Request, res: Response, next: NextFunction) {
    if (req.originalUrl.startsWith("/api")) {
      res.status(404).json({
        error: "Not Found",
        message: `This route ${req.originalUrl} is not found`,
      });
    }

    next();
  }
}
