const express = require('express');
const router = express.Router();
const chatroomController = require('./../../controllers/chatroom');

router.post('/', chatroomController.postChatroom);
router.get('/', chatroomController.getChatrooms);
router.get('/:id', chatroomController.getCharoomById);
router.delete('/delete/:id', chatroomController.deleteChatroom);

module.exports = router;
