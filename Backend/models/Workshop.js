const mongoose = require("mongoose");

const workshopSchmea = new mongoose.Schema({
	workshopId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	registeredUsers: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
});

const Workshop = mongoose.model("Workshop", workshopSchmea);
module.exports = Workshop;
