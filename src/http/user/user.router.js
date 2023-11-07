import express from "express";
import { userAuthMiddleware } from "../../middleware/user-auth.middleware.js";

export class UserRouter {
	router;
	
	constructor(UserController) {
		this.router = express.Router();
		this.router.get('/', userAuthMiddleware, UserController.getAll.bind(UserController));
		this.router.get('/profile', userAuthMiddleware, UserController.getProfile.bind(UserController));
	}
	
}
