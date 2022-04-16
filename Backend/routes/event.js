const router = require("express").Router();

// const { auth } = require("../utils/verify");
const { enrollEvent } = require("../controllers/eventController");

// router.get("/", auth, getEnrolledEvents);
// router.get("/enroll/:eventId", auth, enrollEvent);

// router.get("/", getEnrolledEvents);
router.post("/enroll", enrollEvent);

module.exports = router;
