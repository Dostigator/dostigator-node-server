const express = require("express");
const app = express();
const port = 3000;
const data = require("./app/data");

app.get("/achievements", (request, response) => {
  response.send(data);
});

app.get("/achievements/:id", (request, response) => {
  response.send(data[request.params.id]);
});

app.post("/achievements", (request, response) => {
  console.log(request.body);
  const achievement = request.body;
  data.push({
    name: achievement.name,
    id: data.length
  });
  response
    .status(201)
    .send(`acheivement with body ${achievement} posted successfully!`);
});

app.delete("/achievements/:id", (request, response) => {
  const achievement = data[request.params.id];
  delete data[request.params.id];
  response
    .status(201)
    .send(`achievement with body ${achievement} deleted successsfully`);
});

app.put("/achievements/:id", (request, response) => {
  const achievement = req.body;
  data[request.params.id].name = achievement.name;
  response
    .status(204)
    .send(`achievement with body ${achievement} put successsfully`);
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened, ", err);
  }

  console.log(`server is listening on ${port}`);
});
