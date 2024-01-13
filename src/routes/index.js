const express=require("express");
const usersRouter = require("./users.routes");
const ordersRouter = require("./orders.routes");
const cartRouter = require("./carts.routes");
const productRouter = require("./products.routes");
const categorieRouter = require("./categories.routes");
const productsincartRouter = require("./productsincarts.routes");
const purchaseRouter = require("./purchases.routes");
const productimgsRouter = require("./productimgs.routes");
const rauter=express.Router();

//rutas
rauter.use("/users", usersRouter)
rauter.use("/orders", ordersRouter)
rauter.use("/carts", cartRouter)
rauter.use("/products", productRouter)
rauter.use("/categories", categorieRouter)
rauter.use("/productsincarts", productsincartRouter)
rauter.use("/purchases", purchaseRouter)
rauter.use("/productimgs", productimgsRouter)

module.exports=rauter