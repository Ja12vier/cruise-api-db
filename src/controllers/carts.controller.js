const catchError=require("../utils/catchError");
const {carts, users, productsinCarts }=require("../models");




const getAll=catchError(async(req, res)=>{
    const Carts=await carts.findAll({
        include: [users, productsinCarts],
        where: {status:true}})
    return res.status(200).json({
        status: "sucess",
        result: Carts.length,
        Carts
    });
});

//esto sera una 
const create=catchError(async(req, res)=>{
     const userId=req.user.id
 
    const Cart=await carts.create({
        userId
    });
    return res.status(201).json({
        status: "sucess",
        result: "the  Cart has been created",
        Cart
    });

});

const getOne=catchError(async(req, res)=>{
   const {Cart}=req
     
   return res.status(200).json({
    status: "sucess",
    Cart
   })
});

const remove=catchError(async(req, res)=>{
    const {Cart}=req;
    await Cart.update({status: false})
    return res.status(200).json({
       status:"sucess",
       result: "the  Cart has  been deleted  ",
       Cart
    })
});

const removeDefinitivo=catchError(async(req, res)=>{
   const {id}=req.params
    await  carts.destroy({where: {id}})
    return res.status(204).json({
       status:"sucess",
       result: "the carts has  been deleted  ",
       
    })
});

const update=catchError(async(req, res)=>{
   const {Cart}=req;
  const userId=req.user.id
   
   await Cart.update({
 userId
   })
   return res.status(200).json({
    status: "sucess",
    result:"the Cart has been updated",
    Cart
   })

});


module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
    removeDefinitivo
    
}
