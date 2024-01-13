const {getAll, getOne, create, remove, update, removeDefinitivo}=require("../controllers/categories.controller");
const express=require("express");
const categorieMiddleware=require("../middlewares/categories.middleware");
const verifyJWT = require("../utils/verifyJWT");

const categorieRouter=express.Router()

categorieRouter.route("/")
.get(getAll)
.post(create)

categorieRouter.route("/:id")
.get(categorieMiddleware.existCategories,getOne)
.delete(categorieMiddleware.existCategories,remove)
.delete(verifyJWT, removeDefinitivo)
.put(categorieMiddleware.existCategories,update)


module.exports=categorieRouter
