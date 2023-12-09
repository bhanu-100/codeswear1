import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if(req.method=="POST"){
        let user = await User.findOne({"email":req.body.email})
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        if(user && decryptedData == req.body.opassword){
         await User.findOneAndUpdate({email:req.body.email},{password:CryptoJS.AES.encrypt(req.body.npassword, process.env.AES_SECRET).toString()})  
         res.status(200).json({success:true})
        }
    else{
        res.status(200).json({success:false})
    }
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
 
}
export default connectDb(handler);