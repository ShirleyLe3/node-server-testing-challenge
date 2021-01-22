const db = require("../data/config");



function find() {
    return db("tests");
}
function findById(id) {
    return db("tests").where("id", id).first();
}
function findBy(filter) {
	return db("name of database")
		.select("id", "name of column", "name of column")
		.where(filter);
}
async function add(data) {
	const [id] = await db("tests").insert(data);
	return findById(id);
}

function remove(id) {
	return db("tests").where({ id }).del();
}

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
};
