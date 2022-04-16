const router = require("express").Router();
// const { auth } = require("../utils/verify");
const { enrollWorkshop } = require("../controllers/workshopController");

// router.get("/", auth, getEnrolledWorkshops);
// router.get("/enroll/:workshopId", auth, enrollWorkshop);

router.post("/enroll/", enrollWorkshop);

module.exports = router;
