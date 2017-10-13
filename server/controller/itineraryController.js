const Itinerary = require('../dbModels/itinerary.js');
const User = require('../dbModels/user.js');

itineraryController = {
  indexOfItems: (req, res) => {
    Itinerary
      .findOne({ creatorId: req.params.id })
      .exec((err, items) => {
        if (err) return console.log(err);
        res.json({ success: true, message: 'all items by user', itinerary: items});
      })
  },

  getItinerary: (req, res) => {
    Itinerary
      .findOne({ creatorId: req.params.id, _id: req.params.itinerary_id })
      .exec((err, itinerary) => {
        if (err) return console.log(err);
        res.json({ success: true, message: 'itinerary retrieved', itinerary: itinerary})
      })
  },

  createItinerary: (req, res) => {
    User
      .findOne({ _id: req.params.id })
      .exec((err, user) => {
        if (err) return console.log(err);
        var new_itinerary = new Itinerary(req.body);
        new_itinerary.creatorId = req.params.id;
        new_itinerary.save((err, itinerary) => {
          if (err) return console.log(err);
          user.itinerary.push(itinerary);
          user.save((err, user) => {
            if (err) return console.log(err);
            res.json({ success: true, message: 'itinerary created', itinerary: itinerary })
          })
        })
      })
  },

  deleteItinerary: (req, res) => {
    User
      .findOne({ _id: req.params.id })
      .exec((err, user) => {
        if (err) return console.log(err);
        user.itinerary.pull({ _id: req.body.itinerary_id })
        user.save((err, user) => {
          if (err) return console.log(err);
          Itinerary
            .findOneAndRemove({ _id: req.body.itinerary_id }, (err) => {
              if (err) return console.log(err);
              res.json({ success: true, message: 'item successfully deleted'});
            })
        })
      })
  }
}

module.exports = itineraryController;