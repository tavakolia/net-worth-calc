const calcService = require('./calcService');
const exchangeService = require('./exchangeService');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/calc', calcService);
  app.use('/exchange', exchangeService);
};
