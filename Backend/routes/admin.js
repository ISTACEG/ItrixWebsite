const router = require("express").Router();

const { createEvent, getEventInfo } = require("../controllers/adminController");
const { admin } = require("../utils/verify");

router.post("/create-event", admin, createEvent);
router.post("/event-info", admin, getEventInfo);

module.exports = router;
