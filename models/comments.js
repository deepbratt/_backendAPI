const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const comments_schema = new mongoose.Schema ({
  description: {
    type: String,
    required: 'Last name is required',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: 'UserId is requierd',
    ref: 'Users',
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: 'PostId is requierd',
    ref: 'Posts',
  },
  commentDate: {
    type: String,
    default: Date.now,
  },
});
comments_schema.plugin (uniqueValidator);
module.exports = mongoose.model ('Comments', comments_schema);
