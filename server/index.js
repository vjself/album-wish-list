const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ac = require("../src/controller/albumController");

app.use(bodyParser.json());

app.get("/api/albums/:id", ac.getUserFavs);
app.get("/api/albums", ac.getUserFavs);
app.post("/api/albums", ac.addToFavs);
app.put("/api/albums/:id", ac.updateFavData);
app.delete("/api/albums/:id", ac.deleteFromFavs);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server popped off on ${PORT}`);
});
