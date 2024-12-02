const { validationResult } = require("express-validator");
const userModel = require("../model/login_model");

const generateToken = require("../utility/jwt_token");
const bcrypt = require("bcrypt");

 const createUser = async (req,res,next)=> {
    try {
    const errors = validationResult(req);
   
    if(errors.isEmpty()){
         const data = await userModel.createUser(req.body);
        return res.status(201).json({ message: 'User registered successfully!' });
    }
    return res.status(422).json({ errors: { 
      message: 'Invaild Data',
      error: errors.array()}});
   
    }catch(error){
        if(error.code =='ER_DUP_ENTRY'){
          return res.status(409).json({error: {message: 'Already Exist'}})
        }
       return res.status(500).json({error: { message: 'Internal Server Error' ,error}});
    }
 }

 const loginUser = async (req,res,next)=> {
    try{
    const error = validationResult(req);
    if(error.isEmpty()){
      const {email,password} = req.body;
      console.log(email);
      const data = await userModel.findUser(email);
    
      if(data.length==0){
        return res.status(401).json({ errors: {message: "Invaild email or password"}});
      }
     
      const hashPassword = data[0].password;
     
      const match = await bcrypt.compare(password,hashPassword )
      if(!match){
        return res.status(401).json({ errors: {message: "Invaild email or password"}});
      }
      const newData = {...data[0]}
      delete newData.password;
      return res.status(200).json({
        data: newData,
        access_token: generateToken(data)
      });
    } 
    return res.status(401).json({ errors: {message: "Invaild email or password"}});
    }catch(error){
      return res.status(500).json({error: { message: 'Internal Server Error' ,error}});
    }
 }


 module.exports= {
    createUser,
    loginUser
 }