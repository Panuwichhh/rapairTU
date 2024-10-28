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
    location: {
        type: String,
        default: null
        // required: true
    },
    issue: {
        type: String,
        default: null
        // required: true
    },
    details: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: "pending"
        // required: true
    },
    time: {
        type: String,
        // required: false,
        default: () => {
            const now = new Date();
            return now.toLocaleDateString() + "  |  " + now.toLocaleTimeString();
        }
    }
}, { collection:"requestList" })

module.exports = mongoose.model('requestList', requestSchema);