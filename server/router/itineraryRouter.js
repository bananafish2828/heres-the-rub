const express = require('express');
const itineraryRouter = express.Router();

const itineraryController = require('../controller/itineraryController.js');

itineraryRouter.get('/:id', itineraryController.indexOfItems);
itineraryRouter.get('/:id/:itinerary_id', itineraryController.getItinerary);
itineraryRouter.post('/:id', itineraryController.createItinerary);
itineraryRouter.delete('/:id', itineraryController.deleteItinerary);

module.exports = itineraryRouter;