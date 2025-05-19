const userModel = require('../Models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signupController = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        console.log(req.body)
        const existUser = await userModel.findOne({email});
        if(existUser){
            return res.status(201).json({message:'user already exist'})
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password,salt);
            req.body.password = hashPassword;

            const newUser = new userModel(req.body)
            await newUser.save();
            return res.status(200).json({message:'User created',success:true});
        }
    }
    catch(error){
        console.log(error);
    }
}

const loginController = async(req,res) => {
    // console.log(req.body);
    try{
        const {email, password} = req.body;
        const existUser = await userModel.findOne({email});
        if(!existUser){
            return res.status(404).json({message:'User not found', success: false});
        }
        console.log("existUser")
        const match = await bcrypt.compare(password,existUser.password);
        console.log("dnfosn")
        if(!match){
            return res.status(401).json({message:'Incorrect Password', success: false});
        }
        console.log("matched")
        const token = jwt.sign({id:existUser._id,email:existUser.email},"mantu",{expiresIn:'1h'});
        res.cookie('token',token, {httpOnly:true, sameSite: 'strict', maxAge: 24 * 60 * 60 * 1000})
        .status(200).json({message:"Login Successfully", success: true, data: {
          id: existUser._id,
          email: existUser.email
        }})
    }
    catch(e){
        console.error("Login error:", e.message);
        res.status(500).json({ message: 'Server error', success: false });
    }
}

module.exports = {signupController,loginController}

