

const catchError=require("../utils/catchError");
const {orders}=require("../models");
const {users} = require("../models");
const {carts} = require("../models");



const getAll=catchError(async(req, res)=>{
    const Orders=await orders.findAll({
        include: [users, carts],
        where: {status:true}})
    return res.status(200).json({
        status: "sucess",
        result: Orders.length,
        Orders
    });
});


const create=catchError(async(req, res)=>{
    const {userId, cartId, totalPrice}=req.body;
    const Order=await orders.create({
        userId,
        cartId,
        totalPrice

    });
    return res.status(201).json({
        status: "sucess",
        result: "the order has been created",
        Order
    });

});

const getOne=catchError(async(req, res)=>{
   const {Order}=req
     
   return res.status(200).json({
    status: "sucess",
    Order
   })
});

const remove=catchError(async(req, res)=>{
    const {Order}=req;
    await Order.update({status: false})
    return res.status(200).json({
       status:"sucess",
       result: "the Order has  been deleted  ",
       Order
    })
});

const removeDefinitivo=catchError(async(req, res)=>{
    const {id}=req.params
     await  orders.destroy({where: {id}})
     return res.status(204).json({
        status:"sucess",
        result: "the orders has  been deleted  ",
        
     })
 });

const update=catchError(async(req, res)=>{
   const {Order}=req;
   const {totalPrice}=req.body;

   await Order.update({
    totalPrice
   })
   return res.status(200).json({
    status: "sucess",
    result:"the Order has been updated",
    Order
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
