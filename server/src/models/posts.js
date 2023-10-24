const { Schema, model, Types } = require('mongoose');

const postsSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'Users',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
});

module.exports = model('Posts', postsSchema);
