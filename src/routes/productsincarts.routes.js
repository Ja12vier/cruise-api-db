const {getAll, getOne, create, remove, update,removeDefinitivo, purchases}=require("../controllers/productsincarts.controller");
const express=require("express");
const productsincartMiddleware=require("../middlewares/productsincarts.meddleware");
const verifyJWT = require("../utils/verifyJWT");

const productsincartRouter=express.Router()

productsincartRouter.route("/")
.get(verifyJWT,getAll)
.post(verifyJWT, productsincartMiddleware.existcarts,productsincartMiddleware.ValidarProductQuantity,productsincartMiddleware.existPoducCart, create)


productsincartRouter.route("/:id")

.get(productsincartMiddleware.existProductsinCart,getOne)
.delete(verifyJWT,productsincartMiddleware.buscartRemobeProduct,remove)
.delete(verifyJWT, removeDefinitivo)
.put(verifyJWT,productsincartMiddleware.existProductsinCart,update)


module.exports=productsincartRouter