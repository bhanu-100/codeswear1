import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if(req.method=="POST"){
        let p=new Product({
            title:req.body.title,
            slug:req.body.slug,
            img: req.body.img,
            desc: req.body.desc,
            category:req.body.category,
            size:req.body.size ,
            color: req.body.color,
            price:req.body.price ,
            availableQty: req.body.availableQty
        })
        await p.save()
      res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
 
}
export default connectDb(handler);