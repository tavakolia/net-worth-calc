const exchangeService = {
  setup(app) {
    this.app = app;
    this.calc = app.service('calc');
  },
  async get(_id, params) {
    const lastCalc = this.calc.Model.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    console.log('get id:', _id);
    console.log('get params:', params);
    return lastCalc;
  },

  async find() {
    const lastCalc = this.calc.Model.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
    return lastCalc;
  }
};

module.exports = exchangeService;
