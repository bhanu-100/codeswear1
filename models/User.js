const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    phone: {type:String, default:""},
    admin: { type: Boolean, default: false},
    pincode: {type:String, default:""},
    address: {type:String, default:""},
    email: {type:String, required: true,unique: true},
    password: {type:String, required: true}
       
  },{timestamps:true});
//   mongoose.models={}
//  export default mongoose.model("User",UserSchema); 
 export default mongoose.models.User|| mongoose.model("User",UserSchema);
