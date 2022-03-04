const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const User = require("../models/User");

exports.signup = async (req, res) => {
	try {
		const { name, email, phone, password } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return res.status(400).json({ msg: "User already exists" });
		const hashedPassword = await bcrypt.hash(password, 10);
		const otp = otpGenerator.generate(6, {
			lowerCaseAlphabets: false,
			upperCaseAlphabets: false,
			specialChars: false,
		});
		const user = new User({
			name,
			email,
			phone,
			password: hashedPassword,
			otp,
			isVerified: false,
		});
		const savedUser = await user.save();
		return res
			.status(201)
			.json({ msg: "Account created! Verify your account", email, otp });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.verify = async (req, res) => {
	try {
		const { email, otp } = req.body;
		const user = await User.findOne({ email });
		// if (!user) return res.status(400).json({ msg: "No such user found!" });
		if (user.otp !== parseInt(otp))
			return res.status(400).json({ msg: "Incorrect OTP!" });
		user.isVerified = true;
		const savedUser = await user.save();
		return res.status(200).json({ msg: "Account verified!" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const savedUser = await User.findOne({ email });
		if (!savedUser)
			return res.status(403).json({ msg: "No such user found!" });
		const isPasswordCorrect = await bcrypt.compare(
			password,
			savedUser.password
		);
		if (!isPasswordCorrect) {
			return res.status(400).json({ msg: "Invalid credentials" });
		}
		jwt.sign(
			{ username: savedUser.name, email: savedUser.email },
			process.env.SECRET_KEY,
			(err, token) => {
				if (err) {
					console.log(err);
					return res
						.status(500)
						.json({ msg: "Login failed. Try again!" });
				}
				return res.status(200).json({ msg: "Logged in!", token });
			}
		);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: "Server Error" });
	}
};
