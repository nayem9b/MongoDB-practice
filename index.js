const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.local || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("This is my homepage");
});
app.listen(port, () => {
  console.log("my app is running on", port);
});
