const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
        // required: true
    },
    username: {
        type: String,
        default: null
        // required: true
    },
    image_path: {
        type: String,
        default: null
        // required: true
    },
    details: {
        type: String,
        default: null
    },
    major: {
        type: String,
        default: null
    },
    referencePostId: {
        type: String,
        default: null
    },
    time: {
        type: String,
        // required: false,
        default: () => {
            const now = new Date();
            return now.toLocaleDateString() + "  |  " + now.toLocaleTimeString();
        }
    }
}, { collection:"requestListDone" })

module.exports = mongoose.model('requestListDone', requestSchema);