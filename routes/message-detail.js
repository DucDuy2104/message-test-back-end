const express = require('express');
const router = express.Router();
const  {MessageDetailController}= require('../controller')

router.get('/get-all/:messageId', async (req, res) => {
    const {messageId} = req.params
    const messageDetails = await MessageDetailController.getMessageDetailByMessageId(messageId)
    return res.status(200).json({status: true, data: messageDetails})
})


router.post('/create-message-detail', async (req, res) => {
    const { messageId, text, isCustomerSent} = req.body
    const messageDetail = await MessageDetailController.createMessage(messageId, text, isCustomerSent)
    return res.status(200).json({status: true, data: messageDetail})
})

module.exports = router