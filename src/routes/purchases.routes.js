const {getAll, create}=require("../controllers/purchases.controller");
const express=require("express");
const verifyJWT = require("../utils/verifyJWT");
const { verify } = require("jsonwebtoken");

const purchaseRouter=express.Router()

purchaseRouter.route("/")
.get(verifyJWT,getAll)
.post(verifyJWT,create)



module.exports=purchaseRouter