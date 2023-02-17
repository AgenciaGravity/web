const express = require("express");

// Controllers
const { pushCount } = require("../controllers/countServicesPdf.controller");

const countServicesPdfRoute = express.Router();

countServicesPdfRoute.patch("/", pushCount);

module.exports = { countServicesPdfRoute };
