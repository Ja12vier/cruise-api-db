const {body, validationResult}=require("express-validator");

const validField=(req, res, next)=>{
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            status: "error",
            errors: errors.mapped()
        })
    }
    next()
}
/*"userName":"ariel", 
 "role": "medicina en general",
 "email":"arie123@gmail.com", 
 "password*/
exports.createUserValidation=[
    body("userName").notEmpty().withMessage( "the userName field cannot be empty}"),
    body("role").notEmpty().withMessage( "the role field cannot be empty"),
    body("email").isEmail().exists().notEmpty().withMessage("the email field cannot be empty"),
    body("password").isLength({max: 6, min: 4}).notEmpty().withMessage("the password field cannot be empty"),
    validField
]