const _ = require('lodash');

const exchangeService = {
  setup(app) {
    this.app = app;
    this.calc = app.service('calc');
  },
  exchangeValues(calc, exchangeRate) {
    //TODO: exchange all values!
    // console.log('calc',calc);
    // _.forEach(calc.data.assets, (asset) => {
    //   console.log(asset);
    // });
    return calc;
  },
  async get(_id, params) {
    const {query: {exchangeRate, currency}} = params;
    const lastCalc = this.calc.Model.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    console.log('get id:', _id);
    console.log('get params:', params);
    lastCalc.currency = currency;
    return this.exchangeValues(lastCalc, exchangeRate);
  },

  async find(_id, params) {
    const {query: {exchangeRate, currency}} = params;
    const lastCalc = this.calc.Model.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    console.log('find');
    lastCalc.currency = currency;
    return this.exchangeValues(lastCalc, exchangeRate);
  }
};

module.exports = exchangeService;
