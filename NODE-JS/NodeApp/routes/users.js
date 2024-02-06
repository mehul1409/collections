const express = require("express");
const router = express.Router();
const usercontroller = require('../controller/users');

router
//create post /products
.post('/',usercontroller.createproducts)

//read get /products
.get('/',usercontroller.getallproducts)
.get('/:id',usercontroller.getproduct)

//update put /products/:id
.put('/:id',usercontroller.replaceproduct)
.patch('/:id',usercontroller.updateproduct)

//delete DELETE /products/:id
.delete('/:id',usercontroller.deleteproduct);

exports.router = router;