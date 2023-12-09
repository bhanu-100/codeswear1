import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
    let token=req.body.token;
    const data= jwt.verify(token,process.env.JWT_SECRET)
    let orders= await Order.find({email:data.email,status:"Paid"})
    res.status(200).json({orders})
  }
  export default connectDb(handler);