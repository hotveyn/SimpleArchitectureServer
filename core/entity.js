export class Entity {
	db;
	tableName;
	
	constructor(db, tableName) {
		this.db = db;
		this.tableName = tableName
	}
	
	select(what, restOfScript = "") {
		const script = this.db.prepare(`SELECT ${what} FROM ${this.tableName} ${restOfScript}`)
		return script.all()
	}
	
	insert(values) {
		const script = this.db.prepare(`INSERT INTO ${this.tableName} VALUES(${values.join(', ')})`)
	}
}
