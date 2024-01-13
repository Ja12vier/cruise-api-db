const express=require("express");
const cors=require("cors");
const helmet=require("helmet");
const rauter = require("./routes");
const errorHandler = require("./utils/errorHandler");
require("dotenv").config();

const app=express()

//meddlewares

app.use(express.json())
app.use(helmet({
    crossOriginIsolated: false
}))
app.use(cors())

//rutas
 
app.use("/api/v1", rauter)

//errorHandler

app.use(errorHandler)

module.exports=app;