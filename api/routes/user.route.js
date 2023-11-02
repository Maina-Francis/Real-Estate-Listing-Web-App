import express from "express";
import { test } from "../../api/controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/hello", test);

export default userRouter;
