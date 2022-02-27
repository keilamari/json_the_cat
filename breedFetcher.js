const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName.slice(0, 4)}`, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching breed description: ${body}`), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data[0].breeds[0].description);
  });
};

module.exports = { fetchBreedDescription };