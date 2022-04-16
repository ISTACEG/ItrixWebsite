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

exports.enrollWorkshop = async (req, res) => {
	try {
		const { name, email, phone, college, workshops } = req.body;
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
		user.workshopsRegistered = [...workshops];
		for (let workshopId of workshops) {
			const workshop = await Workshop.findOne({ workshopId });
			workshop.registeredUsers.push(user._id);
			await workshop.save();
			let regId = otpGenerator.generate(8, {
				lowerCaseAlphabets: false,
				specialChars: false,
			});
			if (workshopId === "1") {
				user.workshop1Id = "ITW1-" + regId;
			} else if (workshopId === "2") {
				user.workshop2Id = "ITW2-" + regId;
			} else if (workshopId === "3") {
				user.workshop3Id = "ITW3-" + regId;
			} else if (workshopId === "4") {
				user.workshop4Id = "ITW4-" + regId;
			}
		}
		const savedUser = await user.save();
		return res.json({
			msg: `Workshops enrolled`,
			email: savedUser.email,
			workshopRegistrationIds: {
				workshop1Id: savedUser.workshop1Id,
				workshop2Id: savedUser.workshop2Id,
				workshop3Id: savedUser.workshop3Id,
				workshop4Id: savedUser.workshop4Id,
			},
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
