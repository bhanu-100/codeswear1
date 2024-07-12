import React from "react";
import Order from "@/models/Order";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
if(req.method=="POST"){
  let  order = await Order.findOneAndUpdate({orderId:req.body.orderId},{status:req.body.status,delivery:req.body.delivery,address:req.body.address,pincode:req.body.pincode,city:req.body.city,state:req.body.state,phone:req.body.phone,email:req.body.email,name:req.body.name});
  res.status(200).json({success:"success"})
}
else{
    res.status(400).json({error:"This method is not allowed"})
}
}
export default connectDb(handler);