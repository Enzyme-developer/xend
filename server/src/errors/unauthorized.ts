import { StatusCodes } from "http-status-codes";
import CustomError from "./customError";

class Unauthorized extends CustomError {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default Unauthorized;
