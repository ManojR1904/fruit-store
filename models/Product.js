const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    prices: [Number]  // [100, 250, 500]
});

module.exports = mongoose.model('Product', ProductSchema);
