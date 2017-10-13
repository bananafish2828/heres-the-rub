const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = Schema({
  location: { type: String, required: true },
  time: { type: Number, required: true },
  intensity: { type: Number, required: true },
  notes: { type: String }
})

const itinerarySchema = Schema ({
  title: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, red: 'User', required: true },
  items: [ itemSchema ],
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
