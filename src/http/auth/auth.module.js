import {UserEntity} from "../user/user.entity.js";
import {BaseDatabase} from "../../database/base.db.js";
import {UserService} from "../user/user.service.js";
import {UserController} from "../user/user.controller.js";
import {UserRouter} from "../user/user.router.js";
import {AuthService} from "./auth.service.js";
import {AuthController} from "./auth.controller.js";
import {AuthRouter} from "./auth.router.js";
import {JWTService} from "../../lib/jwt.service.js";

export class AuthModule {
    name = "auth";
    service;
    controller;
    router;

    constructor() {
        this.userEntity = new UserEntity(BaseDatabase.db);
        this.service = new AuthService(new JWTService(), this.userEntity);
        this.controller = new AuthController(this.service);
        this.router = new AuthRouter(this.controller).router;
    }
}