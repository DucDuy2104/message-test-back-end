const { MessageDetail }= require('../model')
const socket = require('../socket')

exports.createMessage = async (messageId, text, isCustomerSent) => {
    const messageDetail = await new MessageDetail({
        messageId,
        text,
        isCustomerSent
    }).save()

    socket.getIo().emit('sendMessage', { messageDetail: messageDetail})
    return messageDetail
}

exports.getMessageDetailByMessageId = async (messageId) => {
    return await MessageDetail.find({ messageId })
}


