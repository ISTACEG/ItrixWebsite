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

exports.enrollEvent = async (req, res) => {
	try {
		const { name, email, phone, college, events } = req.body;
		let eventRegId =
			"ITE-" +
			otpGenerator.generate(8, {
				lowerCaseAlphabets: false,
				specialChars: false,
			});
		const user = new User({
			name,
			email,
			phone,
			college,
			eventsRegistered: [...events],
			eventRegistrationId: eventRegId,
		});
		// console.log(user);
		for (let eventId of events) {
			const event = await Event.findOne({ eventId });
			event.registeredUsers.push(user._id);
			await event.save();
		}
		const savedUser = await user.save();
		return res.json({
			msg: "Event enrolled",
			email: savedUser.email,
			eventRegistrationId: savedUser.eventRegistrationId,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
