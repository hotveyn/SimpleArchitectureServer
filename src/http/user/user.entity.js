import { Entity } from "../../core/entity.js";


export class UserEntity extends Entity {
	db;

	static tableName = 'users'
	static schema = `
	id INTEGER PRIMARY KEY,
	login TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL
	`;
	
	constructor(db) {
		super(db, 'users', { login: 'login', password: 'password'})
		this.id = "id";
		this.login = "login";
		this.password = "password";
		
		this.db = db
	}
	
}
