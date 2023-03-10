const bodyParser = require("body-parser");
const actors = require("./actorsRoute.js");
const companies = require("./companiesRoute.js");
const works = require("./worksRoute.js");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(actors, companies, works);
}