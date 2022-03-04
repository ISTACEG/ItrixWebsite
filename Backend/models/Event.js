const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
	eventId: {
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
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
