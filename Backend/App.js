import express from "express";
import product from "./models/product.js";
import bodyParser from "body-parser";
import user from "./models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import orders from "./models/ordermodel.js";
import cors from "cors";
import FormData from "form-data";
import multer from "multer";
import path from "path";


// const bcrypt = require("bcrypt")
// import ErrorHanler from "./utils/ErrorHandler.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(ErrorHanler);
// parse application/json
app.use(bodyParser.json());
app.use(cors());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/productimages/");
  },
  filename: function (req, file, cb) {
    var imageName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});
const upload = multer({
  storage: storage,
}).fields([{ name: "productimages" }]);

app.get("/products", async (req, res, next) => {
  const productlist = await product.find();
  

  
  res.status(200).json({
    status: true,
    productlist,
  });
});

app.post("/product/new", async (req, res, next) => {
  const products = new product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    // images: req.file.path,
  });
  products.save();

  res.status(201).json({
    sucess: true,
    products,
  });
});

app.patch("/product/:id", async (req, res, next) => {
  let productsingal = await product.findById(req.params.id);
  if (!productsingal) {
    return res.status(404).json({
      status: false,
      message: "product not found",
    });
  }
  console.log(productsingal);
  let id = req.params.id;
  //   console.log(id,"hu3uegduy");
  let products = await product.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    sucess: true,
    products,
  });
  //    console.log(products,"lkjrkj43jht");
});

app.delete("/product/:id", async (req, res) => {
  let productsi = await product.findById(req.params.id);

  if (!productsi) {
    return res.status(404).json({
      message: "product not found",
    });
  }
  await productsi.remove();
  res.status(200).json({
    status: true,
    message: "product deleted sucessfully",
  });
});

// -----------------user registeration api starts-----------------//

// app.post("/register", (req,res)=>{
//     if (!req.body.username&&!req.body.email&&!req.body.password){
//         return res.status(400).json({
//              status:false,
//              message:"please enter all details"
//          })

//       }

//     var  username= req.body.username
//    var email= req.body.email
//    var password= req.body.password
//     var cpassword =req.body.cpassword

// if (password!==cpassword){
//   res.json({
//      message:'password not matched'
//   })
// }
// //  else{
// //   bcrypt.hash(password,10, function(err,hash) {
// //     console.log(hash);
// //     if (err){
// //      return res.json({
// //        message:"somthing went wrong",
// //        error:err
// //      })
// //     }
//     else{

//      const Users = new user({
//       _id:mongoose.Types.ObjectId(),
//       username:username,
//        email:email,
//        password:password,
//        cpassword:cpassword,

//     //  avatar:{
//     //    public_id:" this is a sample id ",
//     //    url:"this is url for user"
//     //  }
//     })

//     Users.save().then(()=>{
//      res.status(200).json({
//        status:true,
//        message:"user register sucessfully ",
//        result:Users

//     })

//     }).catch((err)=>{
//      res.status(400).json({
//        status:false,
//        message:err
//      })

//     })

//     }

// });

app.post("/register", (req, res) => {
  console.log(req.body);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/coinImage/");
    },
    filename: function (req, file, cb) {
      var imageName =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      cb(null, imageName);
    },
  });
  const upload = multer({
    storage: storage,
  }).fields([{ name: "coinImage" }]);

  upload(req, res, function (err) {
    console.log("nj nj j j", req.body);

    if (!req.body.username && !req.body.email && !req.body.password) {
      return res.status(400).json({
        status: false,
        message: "please enter all details",
      });
    }
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

    if (password !== cpassword) {
      res.json({
        message: "password not matched",
      });
    } else {
      const Users = new user({
        _id: mongoose.Types.ObjectId(),
        username: username,
        email: email,
        password: password,
        cpassword: cpassword,

        //  avatar:{
        //    public_id:" this is a sample id ",
        //    url:"this is url for user"
        //  }
      });

      Users.save()
        .then(() => {
          res.status(200).json({
            status: true,
            message: "user register sucessfully ",
            result: Users,
          });
        })
        .catch((err) => {
          res.status(400).json({
            status: false,
            message: err,
          });
        });
    }
  });
  //  else{
  //   bcrypt.hash(password,10, function(err,hash) {
  //     console.log(hash);
  //     if (err){
  //      return res.json({
  //        message:"somthing went wrong",
  //        error:err
  //      })
  //     }
});
//  }

// })

// ------------------user login api starts--------------------------------//

app.post("/login", (req, res) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/coinImage/");
    },
    filename: function (req, file, cb) {
      var imageName =
        file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      cb(null, imageName);
    },
  });
  const upload = multer({
    storage: storage,
  }).fields([{ name: "coinImage" }]);

  upload(req, res, function (err) {
    let email = req.body.email;
    let password = req.body.password;
    let data = {
      email: email,
      password: password,
    };
    user.findOne(data, (err, item) => {
      if (err) {
        res.status(404).json({
          message: "no data found",
        });
      }
      if (!item) {
        res.status(404).json({
          message: "not data foundd",
        });
      }
       else {
        res.status(200).json({
          data:item,
          message:"login sucessfully"
        });
      }
    });
  });
});

// -------------------order api starts----------------------------//

app.post("/order/new", (req, res) => {
  let shippingInfo = req.body.shippingInfo;
  let orderItems = req.body.orderItems;
  let paymentInfo = req.body.paymentInfo;
  let itemPrice = req.body.itemPrice;
  let texPrice = req.body.texPrice;
  let shippingPrice = req.body.shippingPrice;
  let totalPrice = req.body.totalPrice;

  const order = new orders({
    shippingInfo: shippingInfo,
    orderItems: orderItems,
    paymentInfo: paymentInfo,
    itemPrice: itemPrice,
    texPrice: texPrice,
    shippingPrice: shippingPrice,
    totalPrice: totalPrice,
    paidAt: Date.now(),
    user: req.user_id,
  });

  console.log(order);
  res.status(201).json({
    sucess: true,
    order,
  });
});

export default app;
