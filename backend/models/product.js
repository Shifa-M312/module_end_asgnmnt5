const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Please enter product name"] 
  },
  description: { 
    type: String, 
    required: [true, "Please enter description"] 
  },
  price: { 
    type: Number, 
    required: [true, "Please enter price"] 
  },
  category: { 
    type: String, 
    required: [true, "Please enter category"] 
  },
  image: { 
    type: String, 
    default: "https://placeholder.com" 
  },
  stock: { 
    type: Number, 
    default: 0 
  }
}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

module.exports = mongoose.model('Product', productSchema);

