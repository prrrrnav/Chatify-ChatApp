const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: { type: String },// Optional user profile picture

    status: { type: String, default: 'offline' }, // e.g., 'online', 'offline', 'away'

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User;


// username: {},
// email: {},
// password: {}