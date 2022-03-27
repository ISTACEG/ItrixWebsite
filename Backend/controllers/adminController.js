const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
	try {
		const { eventId, name, description, date, time } = req.body;
		const event = new Event({
			eventId,
			name,
			description,
			date,
			time,
		});
		const savedEvent = await event.save();
		console.log("Event created!");
		return res
			.status(201)
			.json({ msg: "Event created!", event: savedEvent });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.getEventInfo = async (req, res) => {
	try {
		const { eventId } = req.body;
		const event = await Event.findOne({ eventId })
			.populate("registeredUsers", "name email eventRegistrationId -_id")
			.select("-_id eventId name description date time registeredUsers");
		return res.json({
			event,
			totalRegistrations: event.registeredUsers.length,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
