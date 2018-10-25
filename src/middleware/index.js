// const request = require('request');
// let request = require('async-request');
var rp = require('request-promise');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.use('/rates', (req, res) => {
    const baseURL = 'https://api.exchangeratesapi.io/latest?base=' + req.query.base;

    var options = {
      uri: baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      json: true,
      gzip: true
    };

    rp(options)
      .then(function (response) {
        res.json(response);
      }).catch(function (err) {
        console.error('Error fetching latest rates', err);
        res.json(err.error);
      });
  });
};
