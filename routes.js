const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:anything", "/campaigns/l");
module.exports = routes;
