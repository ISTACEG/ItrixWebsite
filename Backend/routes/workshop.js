const router = require("express").Router();
// const { auth } = require("../utils/verify");
const { enrollWorkshop } = require("../controllers/workshopController");
const { sendWorkshopRegistrationEmail } = require("../utils/mailer");

// router.get("/", auth, getEnrolledWorkshops);
// router.get("/enroll/:workshopId", auth, enrollWorkshop);

router.post("/enroll/", enrollWorkshop, sendWorkshopRegistrationEmail);

module.exports = router;
