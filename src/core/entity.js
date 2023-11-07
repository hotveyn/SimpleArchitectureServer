export class Entity {
	db;
	tableName;
	creationAttributes;
	
	constructor(db, tableName, creationAttributes) {
		this.db = db;
		this.tableName = tableName
		this.creationAttributes = creationAttributes
	}
	
	select(what, restOfScript = "") {
		const script = this.db.prepare(`SELECT ${what} FROM ${this.tableName} ${restOfScript}`)
		return script.all()
	}
	
	insert(values) {
		// Пиздец бля, так вот зачем нужны орм и кверибилдеры
		const creationAttributesValues = Object.values(this.creationAttributes);
		let valuesString = '?, '.repeat(creationAttributesValues.length);
		valuesString = valuesString.slice(0, valuesString.length - 2);
		const script = this.db.prepare(`INSERT INTO ${this.tableName} (${creationAttributesValues.join(', ')}) VALUES(${valuesString})`)
		return script.run(values);
	}
}
