
// import Product from "../../models/product.js"
 import product from "../models/product.js"
exports.createProduct = async (req,res,next)=>{
     const product = await product.create(req.body);

     res.status(201).json({
        sucess:true,
        product
     })
 }

 exports.getAllproducts = (req,res)=>{
     res.status(200).json({
        message: "route is working fine"
     })
}




