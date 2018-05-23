const mongoose = require('mongoose')
// const Schema = mongoose.Schema

var schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullname: String,
    picture: String,
    task: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, {
    timestamps: true
})

var User = mongoose.model('users', schema)

module.exports = User