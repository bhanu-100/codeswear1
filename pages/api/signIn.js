import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const handler = async (req, res) => {
    if(req.method=="POST"){
        let user = await User.findOne({"email":req.body.email})
        if(user){
            const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            if(req.body.email == user.email && req.body.password == decryptedData){
                const token = jwt.sign({email:user.email}, process.env.JWT_SECRET,{expiresIn:"2d"});
                res.status(200).json({success:true,token})
            }
            else{
                res.status(200).json({success:false,error:"Invalid credential"})
            }
        }
        else{
            res.status(200).json({success:false,error:"No user found"})
        }
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
 
}
export default connectDb(handler);