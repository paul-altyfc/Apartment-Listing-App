const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    title: String,
    price: Number,
    sqm: Number,
    bedrooms: Number,
    bathrooms: Number,
    image: String,
});

module.exports = mongoose.model('Apartment', apartmentSchema);