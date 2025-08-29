const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  category: { type: String, enum: ["Lost", "Found"] },
  status: { 
    type: String, 
    enum: ["Pending", "Approved", "Claimed"], 
    default: "Pending" 
  },
  user:{
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  claimantId: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);
