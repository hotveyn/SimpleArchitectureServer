import { DB } from "../core/db.js"
import { baseLogger } from "../logger/base.logger.js";

class BaseDB extends DB {
	
	constructor(logger) {
		super(logger, process.env.DB_NAME || 'database.sqlite');
	}
}

export const BaseDatabase = new BaseDB(baseLogger);
