const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const posts_schema = new mongoose.Schema ({
  title: {
    type: String,
    required: 'First name is required',
  },
  description: {
    type: String,
    required: 'Last name is required',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  postDate: {
    type: String,
    default: Date.now,
  },
});
posts_schema.plugin (uniqueValidator);
module.exports = mongoose.model ('Posts', posts_schema);
