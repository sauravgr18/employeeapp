import express from "express";
import cors from "cors";
import { profileRouter } from "./controllers/ProfileController";
import { errorHandler } from "./utils/ErrorHandler";

export const app = express();

//using the dependancies
app.use(cors());
app.use(express.json());

app.use("/profile", profileRouter);
app.use(errorHandler);