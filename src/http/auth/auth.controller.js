import {AuthLoginDto} from "./dto/auth-login.dto.js";
import {AuthRegDto} from "./dto/auth-reg.dto.js";
import {ResponseService} from "../../lib/response.service.js";

export class AuthController {
    AuthService;

    constructor(AuthService) {
        this.AuthService = AuthService;
    }

    async login(req, res, next) {
        const dto = new AuthLoginDto(req.body);
        const result = await this.AuthService.login(dto);
        next(result);
    }

    async registration(req, res) {
        const dto = new AuthRegDto(req.body);
        const result = await this.AuthService.registration(dto);
        ResponseService.success(res, result);
    }
}