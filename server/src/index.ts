const cors = require("cors");
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Custom middlewares
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});