const express = require("express");
const cors = require("cors");
const app = express();
const port = 7070;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({ massage: "success" });
});
app.listen(port, () => {
  console.log(`server listen on port: ${port}`);
});
