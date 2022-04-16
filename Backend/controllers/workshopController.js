const User = require("../models/User");
const Workshop = require("../models/Workshop");
const otpGenerator = require("otp-generator");

// exports.getEnrolledWorkshops = async (req, res) => {
// 	try {
// 		const {
// 			workshop: enrolledWorkshops,
// 			workshop1Id,
// 			workshop2Id,
// 			workshop3Id,
// 			workshop4Id,
// 		} = await User.findOne({
// 			email: req.userEmail,
// 		}).select(
// 			"-_id workshop workshop1Id workshop2Id workshop3Id workshop4Id"
// 		);
// 		return res.json({
// 			email: req.userEmail,
// 			enrolledWorkshops,
// 			workshopRegistrationIds: {
// 				workshop1Id,
// 				workshop2Id,
// 				workshop3Id,
// 				workshop4Id,
// 			},
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		return res.status(500).json({ msg: "Server Error" });
// 	}
// };

exports.enrollWorkshop = async (req, res, next) => {
	try {
		const { name, email, phone, college, workshop } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			user = new User({
				name,
				email,
				phone,
				college,
			});
		}
		console.log(user);
		if (user.workshopsRegistered.includes(workshop)) {
			return res
				.status(400)
				.json({ msg: "Workshop already registered!" });
		}
		user.workshopsRegistered.push(workshop);
		const workshopDetail = await Workshop.findOne({ workshopId: workshop });
		workshopDetail.registeredUsers.push(user._id);
		await workshopDetail.save();
		let regId = otpGenerator.generate(8, {
			lowerCaseAlphabets: false,
			specialChars: false,
		});
		if (workshop === "1") {
			user.workshop1Id = "ITW1-" + regId;
			req.workshopRegistrationId = "ITW1-" + regId;
		} else if (workshop === "2") {
			user.workshop2Id = "ITW2-" + regId;
			req.workshopRegistrationId = "ITW2-" + regId;
		} else if (workshop === "3") {
			user.workshop3Id = "ITW3-" + regId;
			req.workshopRegistrationId = "ITW3-" + regId;
		} else if (workshop === "4") {
			user.workshop4Id = "ITW4-" + regId;
			req.workshopRegistrationId = "ITW4-" + regId;
		}
		const savedUser = await user.save();
		req.name = savedUser.name;
		req.workshopName = workshopDetail.name;
		req.email = savedUser.email;
		next();
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
