const catchError=require("../utils/catchError");
const {productimgs,products}=require("../models");
const { uploadToCloudinary, deleteFromCloudinary } = require("../utils/cloudinary");


const getAll=catchError(async(req, res, next)=>{

    const Productimgs=await productimgs.findAll({include: [products]})
  
    return res.status(200).json({
        status: "sucess",
        result: Productimgs.length,
        Productimgs
    })
    
});

const create=catchError(async(req, res)=>{
    const {path, filename}=req.file;
    const {url, public_id}= await uploadToCloudinary(path, filename)
   const image= await productimgs.create({url,publicId: public_id})
  
   return res.status(201).json({
        status: "sucess",
        result: "the  Productimgs has been created",
       image
   })
});

const remove=catchError(async(req, res)=>{
    const {id}=req.params;
   const image= await productimgs.findOne({where: {id}})
   if(!image) res.sendStatus(404).json({message: "this image is not found"})

   await deleteFromCloudinary(image.publicId)
   await  image.destroy()
 
   return res.status(204).json({
    status: "sucess",
    image

   })

})


module.exports={
    getAll,
    create,
    remove
}