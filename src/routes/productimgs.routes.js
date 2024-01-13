const {getAll, create, remove}=require("../controllers/productimgs.controller");
const express=require("express");
const upload = require("../utils/multer");
const productimgsRouter=express.Router()

productimgsRouter.route("/")
.get(getAll)
.post(upload.single("image"), create)

productimgsRouter.route("/:id")
.delete(remove)
module.exports=productimgsRouter