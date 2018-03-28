var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

 desc: {
    type: String,
    default: '',
    trim: true,
    

  },
 price: {
    type: Number,
    
    trim: true,
    required: 'Price required'
  },
  quantity: {
    type: Number,
    trim: true,
    default: '1',
    required: 'Quantity required'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
