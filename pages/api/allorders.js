import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import { Category } from "@mui/icons-material";

const handler = async (req, res) => {
    let orders = await Order.find({ status: { $in: ["Initiated", "Paid"] } });
    res.status(200).json({orders})
  }
  export default connectDb(handler);