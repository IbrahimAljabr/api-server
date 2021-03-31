'use strict';


const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: {type: String , required: true},
    quantity: {type: Number}
});

const clothesModle = mongoose.model('clothes',clothesSchema);


module.exports = clothesModle;