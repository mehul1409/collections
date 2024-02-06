const express = require("express");
const router = express.Router();
const productcontroller = require('../controller/product');

router
//create post /products
.post('/',productcontroller.createproducts)

//read get /products
.get('/',productcontroller.getallproducts)
.get('/:id', productcontroller.getproduct)

//update put /products/:id
.put('/:id', productcontroller.replaceproduct)
.patch('/:id',productcontroller.updateproduct)

//delete DELETE /products/:id
.delete('/:id', productcontroller.deleteproduct);

exports.router = router;