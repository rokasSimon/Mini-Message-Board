const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        text: { type: String, required: true, maxLength: 255 },
        user: { type: String, required: true, maxLength: 255 },
        added: { type: Date, default: Date.now }
    }
);

MessageSchema
    .virtual('formatDate')
    .get(function() {
        return `| ${this.added.toDateString()} | ${this.added.getHours()}:${this.added.getMinutes()}:${this.added.getSeconds()} |`
    });

module.exports = mongoose.model('Message', MessageSchema);
