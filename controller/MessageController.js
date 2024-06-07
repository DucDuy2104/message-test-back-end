const { Message, User, MessageDetail } = require('../model') 
const socket = require('../socket')

exports.createMessage = async (userId) =>  {
    const message = await new Message({
        userId: userId
    }).save()
    const user = await User.findOne({_id: userId})
    socket.getIo().emit("createMessage", {message: {
        ...message._doc,
        user: user,
        messageDetails: []
    }})
    return message;
}


exports.getAllMessage = async () => {
    const messages = await Message.find()
    for(let i = 0; i < messages.length; i++) {
        const user = await User.findOne({_id: messages[i].userId})
        const messageDetails = await MessageDetail.find({messageId: messages[i]._id})
        messages[i] = {
            ...messages[i]._doc,
            user: user,
            messageDetails: messageDetails
        }
    }
    return messages
}


exports.getMessageByUserId = async (userId) => {
    const message = await Message.findOne({userId: userId})
    const messageDetails = await MessageDetail.find({messageId: message._id})
    const user = await User.findOne({_id: userId})
    return {
        ...message._doc,
        messageDetails: messageDetails,
        user: user
    };
}

