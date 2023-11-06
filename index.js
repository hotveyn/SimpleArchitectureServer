import { baseLogger } from "./src/logger/base.logger.js";
import { BaseServer } from "./src/server/base.server.js";
import { BaseDatabase } from "./src/database/base.db.js";
import { UserEntity } from "./src/user/user.entity.js";
import { UserModule } from "./src/user/user.module.js";


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
