const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true }, // Could be extended to support images/files
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who have read this message
    type: { type: String, default: 'text' } // e.g., 'text', 'image', 'file'
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
