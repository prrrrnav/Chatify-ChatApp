const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name: { type: String, default: 'Chat' }, // Optional name for group chats
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    isGroupChat: { type: Boolean, default: false }, // Indicates if it’s a group chat
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }, // For quick access to the latest message
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Admin of the group chat
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);
