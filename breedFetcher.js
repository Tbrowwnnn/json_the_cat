const request = require("request");
let args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {

  const data = JSON.parse(body);

  if (error) {
    console.log(error);
    process.exit();
  }

  if (data.length === 0) {
    {
      console.log("Breed not found");
      process.exit();
    }
  }
  console.log(data[0].description);
});

