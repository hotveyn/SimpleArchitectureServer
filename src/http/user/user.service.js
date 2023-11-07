export class UserService {
	UserEntity;
	
	constructor(UserEntity) {
		this.UserEntity = UserEntity
	}
	
	getAll() {
		return this.UserEntity.select('*')
	}
}
