const rp = require('request-promise');

module.exports = (req, res) => {
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
      console.error('Error fetching latest rates', err); //eslint-disable-line no-console
      res.json(err.error);
    });
};
