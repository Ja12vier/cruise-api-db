
const catchError=require("../utils/catchError");
const {productsinCarts, products, carts, users} = require("../models");



const getAll=catchError(async(req, res)=>{
    const userId=req.user.id
    const Productsincart=await productsinCarts.findAll({
        include: [products, carts, users],
        where: {userId,status:true}})

    return res.status(200).json({
        status: "sucess",
        result: Productsincart.length,
        Productsincart
    });
    
});


const create=catchError(async(req, res)=>{

   const  {cart}=req
   const {productId, quantity}=req.body
   const cartId=cart
   const userId=req.user.id
    
   
    const Productsincart=await productsinCarts.create({
     cartId,
     userId,
     productId,
     quantity,
   
    });

    return res.status(201).json({
        status: "sucess",
        result: "the  Productsincart has been created",
        Productsincart
    });

});

const getOne=catchError(async(req, res)=>{
   const {Productsincart}=req
     
   return res.status(200).json({
    status: "sucess",
    Productsincart
   })
});

const remove=catchError(async(req, res)=>{
    const {productsincart}=req;
   

    return res.status(200).json({
       status:"sucess",
       result: "the  Productsincart has  been deleted  ",
       productsincart
    })
});
const removeDefinitivo=catchError(async(req, res)=>{
    const {id}=req.params
     await  productsinCarts.destroy({where: {id}})
     return res.status(204).json({
        status:"sucess",
        result: "the productsinCarts has  been deleted  ",
        
     })
 });


const update=catchError(async(req, res)=>{

    
   const {Productsincart}=req;

   const {productId, quantity}=req.body
   
   await Productsincart.update({
    productId,
    quantity
   })
   return res.status(200).json({
    status: "sucess",
    result:"the Productsincart has been updated",
    Productsincart
   })

});


      

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
   removeDefinitivo,


}