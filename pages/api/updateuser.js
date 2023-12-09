import user from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method=="POST"){

        let u = await user.findOneAndUpdate({email:req.body.email},{name:req.body.name,phone:req.body.phone,pincode:req.body.pincode,address:req.body.address})  
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
 
}
export default connectDb(handler);