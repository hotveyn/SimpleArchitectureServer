import express from "express";
import { baseLogger } from "../logger/base.logger.js";

export class BaseServer {
	server;
	logger;
	
	constructor(logger) {
		this.server = express()
		this.logger = logger;
	}
	
	async init() {
		try {
			const PORT = process.env.SERVER_PORT || 7123
			this.logger.start('Starting server...')
			await new Promise((resolve, reject) => {
				this.server.listen(PORT, (err) => {
					if (err) {
						reject(err)
					}
					this.logger.success(`Server is listening on http://localhost:${PORT}`)
					resolve(this.server)
				})
			})
			
			return this.server
		} catch (e) {
			this.logger.warn("App crashed on server init stage")
			this.logger.error(e)
			process.exit(1)
		}
	}
	
	registerModules(modules) {
		modules.forEach((module) => {
			this.registerModule(module)
		})
	}
	
	registerModule(module) {
		try {
			this.logger.start(`Register module ${module.name}...`)
			this.server.use(`/${module.name}`, module.router)
		} catch (e) {
			this.logger.error(e)
			process.exit(1)
		}
	}
}
