const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	college: {
		type: String,
		required: true,
	},
	eventsRegistered: {
		type: [String],
	},
	eventRegistrationId: {
		type: String,
	},
	workshopsRegistered: {
		type: [String],
	},
	workshop1Id: {
		type: String,
	},
	workshop2Id: {
		type: String,
	},
	workshop3Id: {
		type: String,
	},
	workshop4Id: {
		type: String,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
