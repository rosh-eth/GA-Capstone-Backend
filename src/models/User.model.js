const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    assets: {
        bat: Number,
        eth: Number,
        dai: Number
    },
    debt: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;