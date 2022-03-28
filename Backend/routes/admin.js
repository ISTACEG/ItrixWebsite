const router = require("express").Router();

const {
	createEvent,
	getEventInfo,
	createWorkshop,
	getWorkshopInfo,
} = require("../controllers/adminController");
const { admin } = require("../utils/verify");

router.post("/create-event", admin, createEvent);
router.post("/event-info", admin, getEventInfo);
router.post("/create-workshop", admin, createWorkshop);
router.post("/workshop-info", admin, getWorkshopInfo);

module.exports = router;
