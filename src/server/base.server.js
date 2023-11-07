import express from "express";
import {baseLogger} from "../logger/base.logger.js";
import {endOfTimesMiddleware} from "../middleware/end-of-times.middleware.js";

export class BaseServer {
    server;
    logger;

    constructor(logger) {
        this.server = express()

        this.logger = logger;
    }

    async init() {
        try {
            this.logger.start('Starting server...')
            await this.listen()
        } catch (e) {
            this.logger.warn("App crashed on server init stage")
            this.logger.error(e)
            process.exit(1)
        }
    }

    async listen() {
        const PORT = process.env.SERVER_PORT || 7123

        await new Promise((resolve, reject) => {
            this.server.listen(PORT, (err) => {
                if (err) {
                    reject(err)
                }
                this.logger.success(`Server is listening on http://localhost:${PORT}`)
                resolve(this.server)
            })
        })

    }

    registerHTTPModules(modules) {
        modules.forEach((module) => {
            this.registerHTTPModule(module)
        })
    }

    registerHTTPModule(module) {
        try {
            this.logger.start(`Registration module ${module.name}...`)
            this.server.use(`/${module.name}`, module.router)
        } catch (e) {
            this.logger.error(e)
            process.exit(1)
        }
    }

    registerExpressAddon(addon) {
        this.server.use(addon)
    }

}
