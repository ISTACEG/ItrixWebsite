const router = require("express").Router();

// const { auth } = require("../utils/verify");
const { enrollEvent } = require("../controllers/eventController");
const { sendEventRegistrationMail } = require("../utils/mailer");

// router.get("/", auth, getEnrolledEvents);
// router.get("/enroll/:eventId", auth, enrollEvent);

// router.get("/", getEnrolledEvents);
router.post("/enroll", enrollEvent, sendEventRegistrationMail);

module.exports = router;