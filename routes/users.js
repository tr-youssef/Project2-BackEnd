import express from "express";
import { signin, signup,getUsers } from "../controllers/users.js";


const usersRouter = express.Router();

usersRouter.post("/signin", signin);
usersRouter.post("/signup", signup);
usersRouter.post("/users", getUsers);

export default usersRouter;
