const catchError=require("../utils/catchError");
const  {categories, products}=require("../models");

exports.existCategories=catchError(async(req, res, next)=>{
    const {id}=req.params;
    const categorie=await categories.findOne({
       where: {id, status: true},
       include:[{
        model:products
       }]
    })
    if(!categories) return res.status(404).json({message:`the categories with id:${id} not found `})
    
    req.Categorie=categorie

    next()

});