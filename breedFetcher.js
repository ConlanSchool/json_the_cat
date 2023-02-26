const request = require(`request`);
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    return error;
  } else if (data.length === 0) {
    console.log("Breed not found.");
  } else {
    console.log(data[0].description);
  }
});
