import express from "express";

export class UserRouter {
    router;

    constructor(UserController) {
        this.router = express.Router();
        this.router.get('/', UserController.getAll.bind(UserController));
    }

}
