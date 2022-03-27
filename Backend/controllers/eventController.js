const User = require("../models/User");
const Event = require("../models/Event");
const otpGenerator = require("otp-generator");

exports.getEnrolledEvents = async (req, res) => {
	try {
		const { events: enrolledEvents } = await User.findOne({
			email: req.userEmail,
		}).select("-_id events");
		return res.json({ email: req.userEmail, enrolledEvents });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.enrollEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId;
		console.log(eventId);
		const user = await User.findOne({ email: req.userEmail });
		const event = await Event.findOne({ eventId });
		console.log(event);
		event.registeredUsers.push(user._id);
		user.events.push(eventId);
		user.eventRegistrationId =
			"ITE-" +
			otpGenerator.generate(8, {
				lowerCaseAlphabets: false,
				specialChars: false,
			});
		const savedUser = await user.save();
		const savedEvent = await event.save();
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
