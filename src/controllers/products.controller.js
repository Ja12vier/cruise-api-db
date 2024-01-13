const catchError=require("../utils/catchError");
const {products}=require("../models");
const {categories, productimgs}=require("../models");
const { Op } = require("sequelize");

const getAll=catchError(async(req, res)=>{
  
    const {title, price, stay}=req.query;
    const where={};
    if(title) where.title={[Op.like]: `%${title}%`}
    if(price) where.price=price
    if(stay) where.stay=stay
    const Product=await products.findAll({
        include:[categories, productimgs],
        where: {status:true},
        where 
    })
    return res.status(200).json({
        status: "sucess",
        result: Product.length,
        Product
    });
});


const create=catchError(async(req, res)=>{
    const userId=req.user.id
    const { title, quantity, descryption, price,stay, categoryId}=req.body;
   
    const Product=await products.create({
        title,
        descryption,
        stay,
        quantity,
        price,
        categoryId,
        userId

    });
    return res.status(201).json({
        status: "sucess",
        result: "the  Product has been created",
        Product
    });

});

const getOne=catchError(async(req, res)=>{
   const {Product}=req
     
   return res.status(200).json({
    status: "sucess",
    Product
   })
});

const remove=catchError(async(req, res)=>{
    const {Product}=req;
    await   Product.update({status: false})
    return res.status(200).json({
       status:"sucess",
       result: "the Product has  been deleted  ",
       Product
    })
});


const removeDefinitivo=catchError(async(req, res)=>{
   const {id}=req.params
    await  products.destroy({where: {id}})
    return res.status(204).json({
       status:"sucess",
       result: "the Product has  been deleted  ",
       
    })
});

const update=catchError(async(req, res)=>{
   const {Product}=req;
   const { title, quantity, descryption, stay, price, categoryId}=req.body;
   
   await Product.update({
    title,
    descryption,
    stay,
    quantity,
    price,
    categoryId

   })
   return res.status(200).json({
    status: "sucess",
    result:"the Product has been updated",
    Product
   })

});


const setimagen=catchError(async(req, res)=>{
    const {id}=req.params;
    const  Product=await products.findOne({where: {id}})
    if(!Product) return res.sendStatus(404).json({message: "this product is not found"})
    await Product.setProductimgs(req.body)
    const productimagen= await Product.getProductimgs()

    return res.status(200).json({
        status: "sucess",
        productimagen
    })
})

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
    removeDefinitivo,
    setimagen

}
