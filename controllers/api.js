// license, a list of versions of the package and when they were released, and its
// dependencies in a way that makes sense to you. Additional information that’s
// available in the API that seems interesting can also be surfaced. Each
// dependency of the package should give a link to the page for that dependency
// so that someone can navigate through and understand the information about all
// of their dependencies.

// On this page, we’d also like to see a breakdown showing what percentage of
// the dependencies of a package have each individual license.


var request = require('request');

exports.list = function(req, res, next) {
  const platform = req.params.platform;
  const name = req.params.name;
  const key = '4d89af2a9512d1a0329e606d975aead8';
  const url1 = `https://libraries.io/api/${platform}/${name}/?api_key=${key}`;
  const url2 = `https://libraries.io/api/${platform}/${name}/dependent_repositories?api_key=${key}`;

  request(url1, function (error, response, body) {
    const json = JSON.parse(body);

    request(url2, function (error, response, body) {
      const dependencies = JSON.parse(body);

      res.render('api', {
        json,
        dependencies
      });
    });
  });
}