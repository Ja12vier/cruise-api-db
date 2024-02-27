const catchError=require("../utils/catchError");
const  {productsinCarts, carts, products}=require("../models");


exports.existProductsinCart=catchError(async(req, res, next)=>{
    const {id}=req.params;
    const productsincart=await productsinCarts.findOne({
       where: {id, status: true},
       include:[{model:carts},{ model:products}]
    })
    if(!productsincart) return res.status(404).json({message:`the productsincart with id:${id} not found `})
    
    req.Productsincart=productsincart

    next()
    

});

exports.existcarts=catchError(async(req, res, next)=>{

const Carts=await carts.findOne({
    where: {status:true}})

    if(!Carts)return res.status(404).json({message: " ningun carrito creado" })
 
   



   req.cart=Carts.dataValues.id
  
   next()
})
exports.ValidarProductQuantity=catchError(async(req, res, next)=>{
  const {productId, quantity}=req.body    

       const id=productId 
  const productQuantity= await products.findOne({where: {id}})
  
  if(!productQuantity) return res.status(404).json({message: "este producto no existe "})
 

  if(productQuantity.dataValues.quantity >= quantity){

    next()
  }else{
    return res.json({message: "excede la cantidad del producto"})
  }

 
    })
    
exports.existPoducCart=catchError(async(req, res, next)=>{
    const {productId, quantity}=req.body  


    const carrito= await productsinCarts.findOne({
      where: {productId},
      include: [{
        model: products,

      }]
    })
  
  if(carrito==null){
  next()
  }else if (carrito.product.dataValues.status==false) {
  let productCart=carrito.product.dataValues
   await productCart.update({status:true})
  return res.status(200).json({message: "este producto se encontraba pero removido ya se agrego al carrito"})
  }else{
    return res.status(201).json({message: "este producto se encuentra en el carrito"})
  
  }

    next()
})





