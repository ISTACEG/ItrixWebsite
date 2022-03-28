const router = require("express").Router();
const { auth } = require("../utils/verify");
const {
	getEnrolledWorkshops,
	enrollWorkshop,
} = require("../controllers/workshopController");

router.get("/", auth, getEnrolledWorkshops);
router.get("/enroll/:workshopId", auth, enrollWorkshop);

module.exports = router;
