import { UserService } from "./user.service.js";
import { UserEntity } from "./user.entity.js";
import { UserController } from "./user.controller.js";
import { UserRouter } from "./user.router.js";
import { BaseDatabase } from "../database/base.db.js";

export class UserModule {
	name = "users";
	entity;
	service;
	controller;
	router;
	
	constructor() {
		this.entity = new UserEntity(BaseDatabase.db);
		this.service = new UserService(this.entity);
		this.controller = new UserController(this.service);
		this.router = new UserRouter(this.controller).router;
	}
}

