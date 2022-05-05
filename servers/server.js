const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const dev = require("./routes/dev")
require('dotenv').config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.uaqq7.mongodb.net/devDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });



app.use("/dev",dev);

app.listen(PORT, () => {
  console.log(`Listening to the ${PORT}`);
});
