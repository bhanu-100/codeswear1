import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if(req.method=="POST")
    {
        let user = await User.findOne({email:req.body.email})
        if(user)
        { 
            const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            const passkey = bytes.toString(CryptoJS.enc.Utf8);
            res.status(200).json({success:true,passkey})
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