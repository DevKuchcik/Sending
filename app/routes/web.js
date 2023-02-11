const express = require('express');
const router = new express.Router();
const MessageController = require('../controllers/message-controller');

router.post('/', MessageController.cretePost);

module.exports = router;