import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import CustomError from "../utils/custom-error";

const validate = (schema: z.Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors
        .map((err) => `${err.path.join(".")} is ${err.message}`)
        .join(", ");
      return next(new CustomError(`Validation failed! ${message}`, 400));
    } else {
      next(error);
    }
  }
};

export default validate;
