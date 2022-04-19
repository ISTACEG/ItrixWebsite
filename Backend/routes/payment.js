const express = require("express");
const router = express.Router();

const { orders, paymentSuccess } = require("../controllers/paymentController");
const { enrollEvent } = require("../controllers/eventController");
const { enrollWorkshop } = require("../controllers/workshopController");
const {
	sendEventRegistrationMail,
	sendWorkshopRegistrationEmail,
} = require("../utils/mailer");

router.post("/orders", orders);

router.post(
	"/success-event",
	paymentSuccess,
	enrollEvent,
	sendEventRegistrationMail
);

router.post(
	"/success-workshop",
	paymentSuccess,
	enrollWorkshop,
	sendWorkshopRegistrationEmail
);

module.exports = router;
