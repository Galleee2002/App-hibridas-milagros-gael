const { indexView } = require("../views/index.js");

function home(req, res) {
  res.send(indexView());
}

module.exports = { home };