import { StatusCodes } from "http-status-codes";
import CustomError from "./customError";
class BadRequest extends CustomError {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
