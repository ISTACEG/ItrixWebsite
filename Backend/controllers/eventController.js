const User = require("../models/User");
const Event = require("../models/Event");
const otpGenerator = require("otp-generator");

// exports.getEnrolledEvents = async (req, res) => {
// 	try {
// 		const { events: enrolledEvents, eventRegistrationId } =
// 			await User.findOne({
// 				email: req.userEmail,
// 			}).select("-_id events eventRegistrationId");
// 		return res.json({
// 			email: req.userEmail,
// 			enrolledEvents,
// 			eventRegistrationId,
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		return res.status(500).json({ msg: "Server Error" });
// 	}
// };

exports.enrollEvent = async (req, res, next) => {
	try {
		const { name, email, phone, college, events } = req.body;
		let eventRegId =
			"ITE-" +
			otpGenerator.generate(8, {
				lowerCaseAlphabets: false,
				specialChars: false,
			});
		let user = await User.findOne({ email });
		if (!user) {
			user = new User({
				name,
				email,
				phone,
				college,
			});
		}
		(user.eventsRegistered = [...events]),
			(user.eventRegistrationId = eventRegId);
		// console.log(user);
		for (let eventId of events) {
			const event = await Event.findOne({ eventId });
			event.registeredUsers.push(user._id);
			await event.save();
		}
		const savedUser = await user.save();
		req.name = savedUser.name;
		req.email = savedUser.email;
		req.eventRegistrationId = savedUser.eventRegistrationId;
		next();
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
