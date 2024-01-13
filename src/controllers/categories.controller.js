const catchError=require("../utils/catchError");
const {categories}=require("../models");


const getAll=catchError(async(req, res)=>{
    const Categories=await categories.findAll({where: {status:true}})
    return res.status(200).json({
        status: "sucess",
        result: Categories.length,
        Categories
    });
});


const create=catchError(async(req, res)=>{
    const {name}=req.body;
    const Categorie=await categories.create({
        name
    });
    return res.status(201).json({
        status: "sucess",
        result: "the  Categorie has been created",
        Categorie
    });

});

const getOne=catchError(async(req, res)=>{
   const {Categorie}=req
     
   return res.status(200).json({
    status: "sucess", 
    Categorie
   })
});

const remove=catchError(async(req, res)=>{
    const {Categorie}=req;
    await Categorie.update({status: false})
    return res.status(200).json({
       status:"sucess",
       result: "the  Categorie has  been deleted  ",
       Categorie
    })
});
const removeDefinitivo=catchError(async(req, res)=>{
   const {id}=req.params
    await  categories.destroy({where: {id}})
    return res.status(204).json({
       status:"sucess",
       result: "the categories has  been deleted  ",
       
    })
});

const update=catchError(async(req, res)=>{
   const {Categorie}=req;
   const {name}=req.body;
   
   await Categorie.update({
      name
   })
   return res.status(200).json({
    status: "sucess",
    result:"the Categorie has been updated",
    Categorie
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
