const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const analyzeRoute = require("./routes/analyzeRoute");
const PORT = process.env.PORT || 5000;

app.use(express.static(
  path.join(__dirname, "../client/dist")
));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html")
  );
});

app.use("/api", analyzeRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});