const express = require("express")
const { users, getUser } = require("../controllers/users")
const { isAuthenticated } = require("../controllers/isAuthenticated")
const router = express.Router()
const cookieParser = require("cookie-parser")

router.use(cookieParser())


router.get("/user", isAuthenticated, users)
router.get("/user/find/:psudoname", getUser)


module.exports = router