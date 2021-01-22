const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./router-models.js");

router.get("/", (req, res) => {
	res.status(200).json({
		message: "we did it!",
	});
});
router.get("/users", (req, res) => {
	db.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				message: "Error retrieving the users",
			});
		});
});

router.post("/", async (req, res, next) => {
	try {
		const name = await db.add(req.body);
		res.status(201).json(name);
	} catch (err) {
		next(err);
	}
});

router.delete("/users/:id", (req, res, next) => {
	db.remove(req.params.id)
		.then((user) => res.status(204).end())
		.catch((err) => next(err));
});

module.exports = router;
