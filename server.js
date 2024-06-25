const express = require("express");
const studentRoutes = require("./src/routes/routes");

const app = express();
const port = 3000;
// to set the format of Request and Response to JSON
app.use(express.json());

app.get("/", (req, res) => {
  // res.send("Hello There");
  res.send("Home Page");
});

//  for Using Router model
app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`app Listening on port ${port}`));
