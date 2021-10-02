const express = require(`express`);
const router = express.Router();

const authRoute = require(`./authRoute`)
const eventsRoute = require(`./eventsRoute`);
const usersRoute = require(`./usersRoute`);

const authMiddleware = require(`./middleware/authMiddleware`);
const userController = require("../controllers/userController");

router.get(`/activate/:link`, userController.activateUser);


router.use(`/api/auth`, authRoute);
router.use(`/api/event`, eventsRoute);
router.use(`/api/users`, authMiddleware, usersRoute);

module.exports = router;