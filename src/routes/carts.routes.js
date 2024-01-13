const {getAll, getOne, create, remove, update, removeDefinitivo}=require("../controllers/carts.controller");
const express=require("express");
const cartMiddleware=require("../middlewares/carts.middleware");
const verifyJWT = require("../utils/verifyJWT");

const cartRouter=express.Router()

cartRouter.route("/")
.get(getAll)
.post(verifyJWT,create)

cartRouter.route("/:id")
.get(cartMiddleware.existCarts,getOne)
.delete(verifyJWT,cartMiddleware.existCarts,remove)
.put(verifyJWT,cartMiddleware.existCarts,update)

cartRouter.route("/:id/cart")
.delete(verifyJWT, removeDefinitivo)
module.exports=cartRouter