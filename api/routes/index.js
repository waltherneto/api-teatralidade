const bodyParser = require("body-parser");
const actors = require("./actorsRoute.js");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(actors);
}