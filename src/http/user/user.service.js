import { ResponseService } from "../../lib/response.service.js";
import { ApiError } from "../../lib/api-error.service.js";

export class UserService {
	UserEntity;
	
	constructor(UserEntity) {
		this.UserEntity = UserEntity
	}
	
	getAll() {
		return ResponseService.success(this.UserEntity.select('*'));
	}
	
	getProfile(user) {
		const profile = this.UserEntity.select('*', `WHERE ${this.UserEntity.tableName}.${this.UserEntity.id} = ${user.id} LIMIT 1`);
		
		if (!profile.length) {
			return ApiError.notFound();
		}
		
		return ResponseService.success(profile[0]);
	}
}
