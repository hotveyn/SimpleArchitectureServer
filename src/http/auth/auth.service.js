import {ApiError} from "../../lib/api-error.service.js";
import {ResponseService} from "../../lib/response.service.js";

export class AuthService {
	UserEntity;
	JWTService;

	constructor(JWTService, UserEntity) {
		this.UserEntity = UserEntity
		this.JWTService = JWTService
	}

	async login(dto) {
		const table = this.UserEntity.tableName;
		const result = this.UserEntity.select('*', `WHERE ${this.UserEntity.tableName}.${this.UserEntity.login} = '${dto.login}' AND ${this.UserEntity.tableName}.${this.UserEntity.password} = '${dto.password}' LIMIT 1`)

		if (!result.length) {
			return ApiError.unauthorized();
		}

		const token = await this.JWTService.signUserAuthToken(...result);

		return ResponseService.success({ token });
	}

	registration(dto) {
		return dto
	}
}