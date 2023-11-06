import { baseLogger } from "./logger/base.logger.js";
import { BaseServer } from "./server/base.server.js";
import { BaseDatabase } from "./database/base.db.js";
import { UserEntity } from "./user/user.entity.js";
import { UserModule } from "./user/user.module.js";


async function bootstrap() {
	baseLogger.start('App is starting...');
	BaseDatabase.init();
	BaseDatabase.createModels([
		UserEntity
	])
	
	const server = new BaseServer(baseLogger);
	server.registerModules([
		new UserModule()
	])
	server.server.get('/', (req, res)=>{res.json(123)})
	await server.init();
}

await bootstrap();
