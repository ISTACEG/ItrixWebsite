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
	password: {
		type: String,
		required: true,
	},
	otp: {
		type: Number,
	},
	isVerified: {
		type: Boolean,
	},
	events: {
		type: [String],
	},
	eventRegistrationId: {
		type: String,
	},
	workshops: {
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
