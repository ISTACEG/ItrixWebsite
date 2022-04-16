// const jwt = require("jsonwebtoken");

// exports.auth = (req, res, next) => {
// 	// console.log(req.headers);
// 	let authToken = req.headers["authorization"];
// 	if (!authToken) return res.status(403).json({ msg: "Access Denied." });
// 	jwt.verify(authToken, process.env.SECRET_KEY, (err, authUser) => {
// 		if (err)
// 			return res
// 				.status(403)
// 				.json({ msg: "Access Denied. Invalid token" });
// 		req.userEmail = authUser.email;
// 		next();
// 	});
// };

exports.admin = (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (
			email === process.env.ADMIN_MAIL &&
			password === process.env.ADMIN_PASSWORD
		) {
			next();
		} else {
			return res.status(403).json({ msg: "Access denied!" });
		}
	} catch (err) {
		console.log(err);
		return res.status(403).json({ msg: "Access denied!" });
	}
};
