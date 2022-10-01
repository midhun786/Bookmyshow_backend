const mongoose = require('mongoose');

//create User schema
const UsersSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

const UsersModel = mongoose.model("users", UsersSchema);

module.exports = UsersModel;