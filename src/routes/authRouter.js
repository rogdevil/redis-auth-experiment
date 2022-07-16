import {
    Router
} from "express";
import {
    createAccount,
    login
} from "../middleware/auth.js";

const authRouter = Router();

authRouter.post('/signup', createAccount)
authRouter.post('/login', login)

export {
    authRouter
}