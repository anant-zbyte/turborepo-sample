const withTM = require("next-transpile-modules")(["ui", "docs"]);

module.exports = withTM({
  reactStrictMode: true,
});
