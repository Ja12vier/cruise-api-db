const catchError=require("../utils/catchError");
const {users}=require("../models")

exports.existUser=catchError(async(req, res, next)=>{
    const {id}=req.params;
    const User=await users.findOne({
        where: {id,status:true}
    })
    if(!User) return res.status(404).json({message:`the user with id:${id} not found `})
    
    req.User=User

    next()
})