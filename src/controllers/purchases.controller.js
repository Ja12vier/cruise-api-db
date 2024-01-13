const catchError=require("../utils/catchError");
const {purchases}=require("../models");
const {productsinCarts, carts, products, users} = require("../models");





const getAll=catchError(async(req, res)=>{
    const Purchases=await purchases.findAll({
        where: {status:true},
    include: [products, users, carts]
    })
    return res.status(200).json({
        status: "sucess",
        result: Purchases.length,
        Purchases
    });
});


const create=catchError(async(req, res)=>{
     const userId=req.user.id
  
     const productSinCart= await productsinCarts.findAll(
        {where: {userId, status: true},
        attributes:['cartId', 'productId','userId' ,'quantity'], 
        raw: true
    })

     const Purchase=await purchases.bulkCreate(productSinCart)
                    await productsinCarts.destroy({where: {userId}})

     
    

  
       
   return res.status(201).json({
        status: "sucess",
        result: "the  Productsincart has been created",
        Purchase
   })
  

});

module.exports={
    getAll,
 
    create,
    
    
}
