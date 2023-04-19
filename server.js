const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const { PORT = 3000, DB_HOST } = process.env;

mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

(async () => {
  try {
    await mongoose.connect(DB_HOST, { useNewUrlParser: true });
    console.log("Database connection successful");
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (err) {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  }
})();
