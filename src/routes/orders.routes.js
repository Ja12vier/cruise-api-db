const {getAll, getOne, create, remove, update, removeDefinitivo}=require("../controllers/oders.controller");
const express=require("express");
const orderMiddleware=require("../middlewares/orders.middleware");
const verifyJWT = require("../utils/verifyJWT");
const ordersRouter=express.Router();

ordersRouter.route("/")
.get(getAll)
.post(create)

ordersRouter.route("/:id")
.get(orderMiddleware.existOrder,getOne)
.delete(orderMiddleware.existOrder,remove)
.put(orderMiddleware.existOrder,update)

ordersRouter.route("/:id/order")
.delete(verifyJWT, removeDefinitivo)
module.exports=ordersRouter