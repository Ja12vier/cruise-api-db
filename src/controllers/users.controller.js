const catchError=require("../utils/catchError");
const {users}=require("../models");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {orders} = require("../models");


const getAll=catchError(async(req, res)=>{
    
    const Users=await users.findAll({
         include: [orders],
         where: {tatus:true}})
       
    return res.status(200).json({
        status: "sucess",
        result: Users.length,
        Users
    });
});


const create=catchError(async(req, res)=>{
    const {userName, email, password, role}=req.body;
    const User=await users.create({
        userName,
        email,
        password,
        role
    });
    return res.status(201).json({
        status: "sucess",
        result: "the user has been created",
        User
    });

});

const getOne=catchError(async(req, res)=>{
    console.log(req)
   const {User}=req
     
   return res.status(200).json({
    status: "sucess",
    User
   })
});

const removeDefinitivo=catchError(async(req, res)=>{
    const {id}=req.params
     await  users.destroy({where: {id}})
     return res.status(204).json({
        status:"sucess",
        result: "the users has  been deleted  ",
        
     })
 });

const remove=catchError(async(req, res)=>{
    const {User}=req;
    await User.update({status: false})
    return res.status(200).json({
       status:"sucess",
       result: "the user has  been deleted  ",
       User
    })
});



const update=catchError(async(req, res)=>{
   const {User}=req;
   const {userName, email}=req.body;

   await User.update({
    userName, 
    email
   })
   return res.status(200).json({
    status: "sucess",
    result:"the user has been updated",
    User
   })

});


const login=catchError(async(req, res)=>{
    const {email, password}=req.body
    const Users=await users.findOne({where: {email}})
    if(!Users) return res.status(401).json({message: "invalid credentials"})
    const isvalid= await bcrypt.compare(password, Users.dataValues.password)
    if(!isvalid) return res.status(401).json({message: "invalid credentials"})
    const token=jwt.sign(
    {Users},
     process.env.TOKEN_SECRET,
     {expiresIn: "5d"}
)
    return res.json({Users,token})
})

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update,
    login,
    removeDefinitivo


}


