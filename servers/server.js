const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const dev = require("./routes/dev")
require('dotenv').config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.MONGO_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });



app.use("/dev",dev);

app.listen(PORT, () => {
  console.log(`Listening to the ${PORT}`);
});
