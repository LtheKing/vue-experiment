//new
import dev from "./config/dev.js";
import prd from "./config/prd.js";
var envSelector = process.env.NODE_ENV;

export default {
  ...(envSelector == "development" ? { env: dev } : { env: prd }),
};

//old
// var env = process.env.NODE_ENV || "development";

// var config = {
//   development: require("./config/dev.js"),
//   production: require("./config/prd.js"),
// };

// module.exports = config[env];
