const User = require("../models/User");
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

exports.getAllEvents = async (req, res) => {
	try {
		const events = await Event.find();
		return res.json({ events });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.enrollEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId;
		const user = await User.findOne({ email: req.userEmail });
		user.events.push(eventId);
		const savedUser = await user.save();
		return res.json({
			msg: "Event enrolled",
			email: savedUser.email,
			eventsEnrolled: savedUser.events,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
