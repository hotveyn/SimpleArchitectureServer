import express from "express";
import {LoginRequest} from "./requests/login.request.js";

export class AuthRouter {
    router;

    constructor(AuthController) {
        this.router = express.Router();
        this.router.post('/login', LoginRequest, AuthController.login.bind(AuthController))
        this.router.post('/registration', AuthController.registration.bind(AuthController))
    }
}