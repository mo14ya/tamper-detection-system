const express = require("express");
const app = express();

app.use(express.json());

let dataStore = [];

app.get("/", (req, res) => {
  res.send("Tamper Detection System Running");
});

app.post("/tamper", (req, res) => {
  const data = {
    deviceId: req.body.deviceId,
    tamper: req.body.tamper,
    location: req.body.location,
    timestamp: new Date()
  };

  dataStore.push(data);

  res.json({ message: "Data Stored", data });
});

app.get("/tamper", (req, res) => {
  res.json(dataStore);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
