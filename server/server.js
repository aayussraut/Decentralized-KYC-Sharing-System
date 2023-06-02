const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

require("./startup/routes")(app);
require("./startup/db")();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
