const express = require("express");
const app = express();
const port = 3000;

const someJSON = {
  hello: "heh, darova",
  name: "Kolyan"
};

app.get("/test", (request, response) => {
  response.send(someJSON);
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened, ", err);
  }

  console.log(`server is listening on ${port}`);
});
