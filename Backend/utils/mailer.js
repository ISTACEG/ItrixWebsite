const mailer = require("nodemailer");

const transport = mailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL_UN,
		pass: process.env.MAIL_PASS,
	},
	from: process.env.MAIL_UN,
});

exports.sendEventRegistrationMail = (req, res) => {
	const content = `<h3>Hi ${req.name}!</h3>
    <p style='font-size: 15px'>ISTA welcomes you to the ITRIX'22, intercollegiate symposium of Department of Information Science and Technology, College of Engineering, Guindy, Anna University.
    Thank you for registering for the events.<br><br>
    <b>This is your Event ID: ${req.eventRegistrationId}</b>
    <p style='font-size: 15px'><b>Steps to participate:</b><br>
    1. Verify your identity by providing your Event ID to the Hospitality desk.<br>
    2. Get your Event card.<br>
    3. Now, you are ready to participate in any of the ITRIX events. <br><br>

    <b>Forget to add an event or want to participate in other events?</b> <br>
    No worries, you can attend any number of events with a single registration.<br><br>
    <b>For further details contact,</b><br>

    <a href="tel:+919384977686">+91 93849 77686<a/><br>
    Hariharan S,<br>
    Programming Head.<br><br>

    <a href="tel:+918008988901">+91 80089 88901</a><br>
    Hrithik K,<br>
    Programming Head.<br><br>

    <a href="tel:+916382224303">+91 6382 224 303</a><br>
    Adhis H,<br>
    Chairman.<br><br>

    <a href="tel:+91 63854 90321">+91 63854 90321</a><br>
    Balasubramaniam M,<br>
    Overall Coordinator.</p>
  `;

	const message = {
		from: `ISTA - ITRIX22 <process.env.MAIL_UN>`,
		to: req.email,
		subject: "Event Registration",
		html: content,
		attachments: [
			{
				filename: "image1.jpg",
				path: "./utils/codeDecode.png",
			},
			{
				filename: "image2.jpg",
				path: "./utils/ctf.png",
			},
		],
	};

	transport.sendMail(message, (err, info) => {
		if (err) {
			console.log(err);
			return res
				.status(400)
				.json({ err: "Server error. Couldn't send mail" });
		}
		return res.json({
			msg: "Event enrolled and Mail sent",
			email: req.email,
			eventRegistrationId: req.eventRegistrationId,
		});
	});
};

exports.sendWorkshopRegistrationEmail = (req, res) => {
	const content = `<h3>Hi ${req.name}!</h3>
    <p style='font-size: 15px'>ISTA welcomes you to the ITRIX'22, intercollegiate symposium of Department of Information Science and Technology, College of Engineering, Guindy, Anna University.
    Thank you for registering for the ${req.workshopName} workshop.<br><br>
    <b>This is your Workshop ID for ${req.workshopName} Workshop: ${req.workshopRegistrationId}</b>
    <p style='font-size: 15px'><b>Steps to participate:</b><br>
    1. Verify your identity by providing your Workshop ID to the Hospitality desk.<br>
    2. Get your Workshop card.<br>
    3. Now, you are all set to attend the workshop. <br><br>

    <b>For further details contact,</b><br>

    <a href="tel:+919384977686">+91 93849 77686<a/><br>
    Hariharan S,<br>
    Programming Head.<br><br>

    <a href="tel:+918008988901">+91 80089 88901</a><br>
    Hrithik K,<br>
    Programming Head.<br><br>

    <a href="tel:+916382224303">+91 6382 224 303</a><br>
    Adhis H,<br>
    Chairman.<br><br>

    <a href="tel:+91 63854 90321">+91 63854 90321</a><br>
    Balasubramaniam M,<br>
    Overall Coordinator.</p>
  `;

	const message = {
		from: `ISTA - ITRIX22 <process.env.MAIL_UN>`,
		to: req.email,
		subject: "Workshop Registration",
		html: content,
		attachments: [
			{
				filename: "",
				path: "",
			},
			{
				filename: "",
				path: "",
			},
		],
	};

	transport.sendMail(message, (err, info) => {
		if (err) {
			console.log(err);
			return res
				.status(400)
				.json({ err: "Server error. Couldn't send mail" });
		}
		return res.json({
			msg: `${req.workshopName} Workshop enrolled and Mail sent`,
			email: req.email,
			workshopRegistrationId: req.workshopRegistrationId,
		});
	});
};
