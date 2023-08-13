import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/customError";

interface ErrorType extends Error {
  statusCode: number;
  message: string;
}

export const errorHandler = (
  err: ErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
  next(err);
};
