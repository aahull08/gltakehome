const express = require("express");
const path = require("path");
const app = express();
const port = 3005;
app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
