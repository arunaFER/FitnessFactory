//user or user accounts collection model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username : {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: true
    },

    accType: {
        enum: ["customer", "instructor"],
        //required: true
    },

    accLevel: {
        type: Number,
        default: 1
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User;