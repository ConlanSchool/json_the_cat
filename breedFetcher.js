const request = require(`request`);

const fetchBreedDescription = (breed, callback) => {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(api, (error, response, body) => {
    if (!breed) {
      console.log("Invlid breed name");
      return callback(error, null);
    }

    const data = JSON.parse(body);

    //if it passes the first check but still has no data return this error
    if (data.length === 0) {
      return callback(error, null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
