var express = require('express');
var router = express.Router();
const { MessageController } = require('../controller')

router.post('/create-message', async (req, res) => {
    const { userId } = req.body
    const message = await MessageController.createMessage(userId)
    return res.status(200).json({ status: true, data: message })
})


router.get('/get-all-messages', async (req, res) => {
    const messages = await MessageController.getAllMessage()
    return res.status(200).json({ status: true, data: messages })
})


router.get('/get-message/:userId', async (req, res) => {
    try {
        const { userId } = req.params
        const message = await MessageController.getMessageByUserId(userId)
        return res.status(200).json({ status: true, data: message })
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router