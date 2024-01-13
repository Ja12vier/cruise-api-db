const {getAll, getOne, create, remove, update, login, removeDefinitivo}=require("../controllers/users.controller")
const express=require("express");
const userMiddleware=require("../middlewares/users.middleware");
const validatorMiddleware=require("../middlewares/usersValidation")
const verifyJWT = require("../utils/verifyJWT");

const usersRouter=express.Router()

usersRouter.route("/")
.get(verifyJWT,getAll)
.post(validatorMiddleware.createUserValidation,create)

usersRouter.route("/login")
.post(login)

usersRouter.route("/:id")
.get(userMiddleware.existUser,verifyJWT,getOne)
.delete(userMiddleware.existUser,verifyJWT,remove)
.put(userMiddleware.existUser,verifyJWT,update)
.delete(userMiddleware.existUser,verifyJWT,remove)

usersRouter.route("/:id/user")
.delete(verifyJWT, removeDefinitivo)
module.exports=usersRouter