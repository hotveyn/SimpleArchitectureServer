import { ResponseService } from "../../lib/response.service.js";

export class UserController {
	UserService;
	
	constructor(UserService) {
		this.getAll.bind(this);
		this.UserService = UserService;
	}
	
	async getAll(req, res, next) {
		const result = this.UserService.getAll();
		next(result)
	}
	async getProfile(req, res, next){
		const result = this.UserService.getProfile(req.user);
		next(result)
	}
}
