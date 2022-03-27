const router = require("express").Router();

const { auth } = require("../utils/verify");
const {
	getEnrolledEvents,
	enrollEvent,
} = require("../controllers/eventController");

router.get("/", auth, getEnrolledEvents);
router.get("/enroll/:eventId", auth, enrollEvent);

module.exports = router;
