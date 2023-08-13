import { StatusCodes } from "http-status-codes";
import CustomError from "./customError";

class Forbidden extends CustomError {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export default Forbidden;
