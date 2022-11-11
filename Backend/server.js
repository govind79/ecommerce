
import mongoose from "mongoose";

import './models/product.js'
import app from "./App.js"


 const port = 8081;

 
 mongoose.connect("mongodb://localhost:27017/ecommerce")
    .then(() =>
        console.log('MongoDB successfully connected.')
    ).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });





