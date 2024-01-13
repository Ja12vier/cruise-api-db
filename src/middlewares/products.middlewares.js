const catchError=require("../utils/catchError");
const  {products, productimgs, categories}=require("../models");

exports.existProducts=catchError(async(req, res, next)=>{
    const {id}=req.params;
    const product=await products.findOne({
       where: {id, status: true},
       
       include:[{
        model:categories
      },{
        model:productimgs


      },
    ]
    })
    if(!product) return res.status(404).json({message:`the product with id:${id} not found `})
    
    req.Product=product

    next()

});


