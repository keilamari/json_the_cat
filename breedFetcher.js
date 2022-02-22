const request = require('request');
const searchId = process.argv[2].slice(0, 4);

request(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchId}`, (error, response, body) => {
  try {
    const data = JSON.parse(body);
    console.log(data[0].breeds[0].description);
  } catch (error) {
    console.log("Breed not found");
  }
});