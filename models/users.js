const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const users_schema = new mongoose.Schema ({
  firstName: {
    type: String,
    required: 'First name is required',
  },
  lastName: {
    type: String,
    required: 'Last name is required',
  },
  email: {
    type: String,
    required: 'Email is required',
  },
  phone: {
    type: String,
    required: 'Phone is required',
  },
  userPassword: {
    type: String,
    required: 'Password is required',
  },
  registrationDate: {
    type: String,
    default: Date.now,
  },
});
users_schema.plugin (uniqueValidator);
module.exports = mongoose.model ('Users', users_schema);
