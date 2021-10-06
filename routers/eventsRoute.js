const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/`, eventController.getAllEvents);

router.get(`/:user_id`, eventController.getEventByUserID);

router.get(`/:user_id/:gte/:lte`, eventController.getEventByUserIDAndTime);

router.post(`/`, authMiddleware, eventController.createEvent);

router.patch(`/:event_id`, authMiddleware, eventController.updatEventByID);

router.delete(`/:event_id`, authMiddleware, eventController.deletEventByID);

module.exports = router;