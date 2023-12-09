import { request } from 'https';
const PaytmChecksum = require('paytmchecksum');
import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import Product from '@/models/Product';
import pincodes from "pincodes.json";

const handler = async (req, res) => {
    if (req.method == "POST") {
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

        let order =new Order({
            email:req.body.email,
            name:req.body.name,
            orderId:req.body.oid,
            products:req.body.Cart,
            phone:req.body.phone,
            address:req.body.address,
            amount:req.body.SubTotal,
            pincode:req.body.pincode,
            city:req.body.city,
            state:req.body.state
        })
        await order.save()
        
        var paytmParams = {};
        paytmParams.body = {
            "requestType": "Payment",
            "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
            "websiteName": process.env.NEXT_PUBLIC_PAYTM_WEBSITE,
            "orderId": req.body.oid,
            "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
            "txnAmount": {
                "value": req.body.SubTotal,
                "currency": "INR",
            },
            "userInfo": {
                "custId": req.body.email,
            },
        };
        const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MKEY)

        paytmParams.head = {
            "signature": checksum
        };
        var post_data = JSON.stringify(paytmParams);
        const requestAsync = async () => {
            return new Promise((resolve, reject) => {
                var options = {
                    hostname: 'securegw.paytm.in',

                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };
                var response = "";
                var post_req = request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });
                    post_res.on('end', function () {
                        // console.log('Response: ', response);
                        let ress=JSON.parse(response).body
                        ress.success=true
                        ress.cartClear=false
                        resolve(ress)
                    });
                });
                post_req.write(post_data);
                post_req.end();
            })
        }
        let myr = await requestAsync()
        res.status(200).json(myr)
    }
}
export default connectDb(handler);