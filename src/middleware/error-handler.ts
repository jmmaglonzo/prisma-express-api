import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import CustomError from "@/utils/custom-error";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res.status(409).json({
          message: "Unique constraint violation",
          error: err.message,
        });
      case "P2025":
        return res.status(404).json({
          message: "Record not found",
          error: err.message,
        });
      default:
        return res.status(500).json({
          message: "Database error",
          error: err.message,
        });
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      message: "Validation error",
      error: err.message,
    });
  }

  res.status(500).json({
    message: "Internal server error",
    error: err.message,
  });
};

export default errorHandler;
