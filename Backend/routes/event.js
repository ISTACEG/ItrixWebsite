const router = require("express").Router();

const { auth, admin } = require("../utils/verify");
const {
	createEvent,
	getAllEvents,
	enrollEvent,
} = require("../controllers/eventController");

router.get("/", auth, getAllEvents);
router.get("/enroll/:eventId", auth, enrollEvent);

router.post("/create", admin, createEvent);

module.exports = router;
