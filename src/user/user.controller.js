import { ResponseService } from "../lib/response.service.js";

export class UserController {
	UserService;
	
	constructor(UserService) {
		this.getAll.bind(this);
		this.UserService = UserService;
	}
	
	async getAll(req, res) {
		const result = this.UserService.getAll();
		ResponseService.success(res, result);
	}
}
