const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageDetail = new Schema({
    messageId:  {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
     },
     isCustomerSent: {
        type: Boolean,
        default: false
     }
})

module.exports = mongoose.model('messagedetail', MessageDetail);