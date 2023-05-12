const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');
const dev = require("./routes/dev")
require('dotenv').config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://admin:admin1234@cluster0.uaqq7.mongodb.net/devDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('client/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('/^((?!(api)).)*$/',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'client','build',         
                      'index.html' ));    
    });
}


app.use("/dev",dev);

app.listen(PORT, () => {
  console.log(`Listening to the ${PORT}`);
});
