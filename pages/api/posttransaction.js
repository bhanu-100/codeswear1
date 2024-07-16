import React from "react";
import Order from "@/models/Order";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let order;
  
    order = await Order.findOneAndUpdate({orderId:req.body.razorpay_order_id},{status:"Paid",paymentInfo:JSON.stringify(req.body),transactionId:req.body.razorpay_payment_id})
    let products= order.products;
    for(let slug in products){
    await Product.findOneAndUpdate({ slug:slug },{ $inc: { "availableQty": -products[slug].qty }})
    }

    res.redirect("/order?clearCart=1&id="+order._id,200)
  }
  export default connectDb(handler);

