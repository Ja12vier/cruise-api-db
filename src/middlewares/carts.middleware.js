const catchError=require("../utils/catchError");
const  {carts, productsincarts, purchases}=require("../models");

exports.existCarts=catchError(async(req, res, next)=>{
    const {id}=req.params;
    const cart=await carts.findOne({
       where: {id, status: true},
      
    })
    if(!cart) return res.status(404).json({message:`the cart with id:${id} not found `})
    
    req.Cart=cart

    next()

});