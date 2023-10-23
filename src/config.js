import dev from "./config/dev.js";
import prd from "./config/prd.js";

var env = process.env.NODE_ENV || "development";

export default {
  development: dev,
  production: prd
};

module.exports = config[env];


