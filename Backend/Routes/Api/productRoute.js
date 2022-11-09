import express from "express";
import { getAllproducts,createProduct } from "../../Controllers.js/productControllers.js";

 const router = express.Router();
 router.route('/products').get(getAllproducts);
 router.route('/product/new').post(createProduct);

  export default router;