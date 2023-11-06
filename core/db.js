import Database, { SqliteError } from "better-sqlite3";

export class DB {
	logger;
	DBName;
	db;
	
	constructor(logger, DBName) {
		this.logger = logger;
		this.DBName = DBName;
	}
	
	init() {
		try {
			this.logger.start('Making or connect to database...');
			this.db = new Database(this.DBName, { verbose: this.logger.info });
			this.logger.success("Database is workin' successfully!");
		} catch (e) {
			this.logger.warn("App crashed on database init stage");
			this.logger.error(e);
			process.exit(1);
		}
	}
	
	createModels(models) {
		this.logger.start('Creating tables in db...')
		models.forEach((model) => {
			this.createModel(model)
		})
		this.logger.success('All possible tables has been created')
	}
	
	createModel(model) {
		try {
			const script = this.db.prepare(`CREATE TABLE ${model.tableName} (${model.schema})`)
			script.run()
		} catch (e) {
			if (e instanceof SqliteError) {
				const m = e.message.split(' ')
				if (`${m[2]} ${m[3]}` === 'already exists') {
					this.logger.info(`Table ${m[1]} already exists`)
					return
				}
			}
			this.logger.error(e)
			process.exit(1)
		}
		
	}
}
