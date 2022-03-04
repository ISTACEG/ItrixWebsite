const router = require("express").Router();
const { signup, login, verify } = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify", verify);

module.exports = router;
