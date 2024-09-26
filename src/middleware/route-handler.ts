import CustomError from "@/utils/custom-error";
import { Request, Response, NextFunction } from "express";

const routeHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new CustomError(`The route ${req.originalUrl} was not found on this server!`, 404));
};

export default routeHandler;
