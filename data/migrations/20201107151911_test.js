exports.up = function (knex) {
	return knex.schema.createTable("tests", (table) => {
        table.increments(), 
        table.text("username").notNullable().unique();
	});
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tests');
};

