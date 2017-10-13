const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema ({
  userName: { type: String, unique: true, required: true },
  email: { type: String },
  photoURL: { type: String },
  itinerary: [ {type: Schema.Types.ObjectId, ref: 'Itinerary'} ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
