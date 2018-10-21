const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: String,
  value: Number
});

const typeSchema = new mongoose.Schema({
  accountType: String,
  accounts: [accountSchema]
});

const calcSchema = new mongoose.Schema({
  currency: String,
  date: String,
  exchangeRate: Number,
  data: {
    assets: [typeSchema],
    liabilities: [typeSchema]
  }
}, { timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Calc', calcSchema);
