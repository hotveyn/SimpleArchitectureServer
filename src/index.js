import { baseLogger } from "./logger/base.logger.js";
import { BaseServer } from "./server/base.server.js";
import { BaseDatabase } from "./database/base.db.js";
import { UserEntity } from "./http/user/user.entity.js";
import { UserModule } from "./http/user/user.module.js";
import {AuthModule} from "./http/auth/auth.module.js";
import express from "express";
import {endOfTimesMiddleware} from "./middleware/end-of-times.middleware.js";


async function bootstrap() {
	baseLogger.start('App is starting...');
	BaseDatabase.init();
	BaseDatabase.createModels([
		UserEntity
	])

	const server = new BaseServer(baseLogger);
	server.registerExpressAddon(express.json())
	server.registerHTTPModules([
		new UserModule(),
		new AuthModule()
	])
	server.registerExpressAddon(endOfTimesMiddleware)
	await server.init();
}

await bootstrap();
