import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");
var nodemailer = require('nodemailer');


const handler = async (req, res) => {
    if(req.method=="POST")
    {
        let user = await User.findOne({email:req.body.email})
        if(user)
        { 
            const bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            const passkey = bytes.toString(CryptoJS.enc.Utf8);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                  user: process.env.NEXT_PUBLIC_MY_EMAIL,
                  pass: process.env.NEXT_PUBLIC_MY_PASS,
                },
              });
            
            var mailOptions = {
                from: {
                    name:'Ietianwear.com',
                    address:process.env.NEXT_PUBLIC_MY_EMAIL,
                },
                to: user.email,
                subject: 'your password',
                text:`your password is ${passkey}`,
              };
              
              const sendMail = async (transporter,mailOptions) => {
                try {
                  await transporter.sendMail(mailOptions);
                } 
                catch(error){
                  console.error(error);
                }
              };
              sendMail(transporter,mailOptions)
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