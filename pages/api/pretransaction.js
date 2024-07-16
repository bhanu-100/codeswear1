import { request } from 'https';
import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import Product from '@/models/Product';
import pincodes from "pincodes.json";
const Razorpay = require('razorpay');

const handler = async (req, res) => {
    if (req.method == "POST") {
        // if userdetail is valid
        if (req.body.name.length > 3 && req.body.email.length > 8 && req.body.phone.length == 10 && req.body.address.length > 3 && req.body.pincode.length == 6) {

        // if pincode is not serviceable
        if(!Object.keys(pincodes).includes(req.body.pincode)){
            res.status(200).json({success:false,"error":"your pincode is not serviceable.",cartClear:false})
            return
        }

        // if cart is tempering
          let cart= req.body.Cart;
          let product, sumTotal=0;
          if( req.body.SubTotal <=0 )
          {
              res.status(200).json({success:false,"error":"Please build your cart and try again.",cartClear:false})
              return
          }
           for( let item in cart){
            sumTotal += cart[item].price * cart[item].qty;
            product = await Product.findOne({slug:item})
            if(product.availableQty < cart[item].qty)
            {
                res.status(200).json({success:false,"error":"Some items in your cart went out of stock.plesae try again.",cartClear:true})
                return
            }
            if(product.price!=cart[item].price){
                res.status(200).json({success:false,"error":"The price of some items in your have been changed.plesae try again.",cartClear:true})
                return
            }
           }
           if(sumTotal !== req.body.SubTotal){
            res.status(200).json({success:false,"error":"The price of some items in your have been changed.plesae try again.",cartClear:true})
            return
           }
    
        const instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET });
        
        var options = {
            amount: (req.body.SubTotal)*100,  
            currency: "INR",
            receipt: req.body.oid
          };
          
        const ord = await instance.orders.create(options)
        if(ord.status=='created'){
        let order = new Order({
            email:req.body.email,
            name:req.body.name,
            orderId:ord.id,
            products:req.body.Cart,
            phone:req.body.phone,
            address:req.body.address,
            amount:req.body.SubTotal,
            pincode:req.body.pincode,
            city:req.body.city,
            state:req.body.state
        })
        await order.save();
        res.status(200).json({success:true,ord:ord});
    }
    else{
        res.status(200).json({success:false,"error":"Something wrong try again"});
    }
 }
 else {
    res.status(200).json({success:false,"error":"Fill the correct details"});
}

}
}
export default connectDb(handler);