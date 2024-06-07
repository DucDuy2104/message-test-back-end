const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Message = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('message', Message);