const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: {type:String, required: true},
    name: {type:String, required: true},
    phone: {type:String, required: true},
    address:{type:String,required:true},
    pincode: {type:String, required: true},
    city: {type:String, default: ""},
    state: {type:String, default: ""},
    orderId: {type:String, required: true},
    paymentInfo: {type:String, default: ""},
    transactionId: {type:String, default: ""},
    products:{type:Object,required:true},
    amount:{type:Number,required:true},
    status:{type: String,default:"Initiated",required:true},    
    delivery:{type: String,default:"unshipped",required:true}    
  },{timestamps:true});
//   mongoose.models={}
//  export default mongoose.model("Order",OrderSchema);
export default mongoose.models.Order|| mongoose.model("Order",OrderSchema);