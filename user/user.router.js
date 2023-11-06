import express from "express";

export class UserRouter{
	UserController;
	router;
	
	constructor(UserController) {
		this.UserController = UserController;
		this.router = express.Router()
		this.router.get('/', this.UserController.getAll.bind(UserController))
	}
	
}
