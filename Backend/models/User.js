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
});

const User = mongoose.model("User", userSchema);

module.exports = User;
