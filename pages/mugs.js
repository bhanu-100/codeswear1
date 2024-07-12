import React from 'react';
import Link from 'next/link';
import mongoose from "mongoose";
import { connect } from 'mongoose';
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import Head from 'next/head';

const Mugs = ({products}) => {
    return (
<section className="text-gray-600 body-font flex flex-wrap m-4 container px-5 py-24 mx-auto min-h-screen md:mt-10 mt-40">
      <Head>
      <title>Mugs - ietianswear.com</title>
      </Head>
  {Object.keys(products).length===0 && <p> Sorry all the mugs are curently out of stock.New stock coing soon.Stay Tuned!</p>}
      {Object.keys(products).map((item)=>{return <div  key={products[item]._id} className="mx-[5%] lg:w-[15%] md:w-1/2 p-4 w-full shadow-2xl ">
        <Link passHref={true} href={ `/product/${products[item].slug}`} className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="w-full h-[30] md:h-[36vh] block" src={products[item].img}/>
        <div className="mt-4">
          <h4 className="text-gray-500 ">{products[item].category}</h4>
          <h2 className="text-gray-900  font-bold mb-1">{products[item].title}</h2>
          <h3 className="text-gray-500 ">{products[item].desc}</h3>
          <p className="mt-1 font-semibold">₹ {products[item].price}</p>
          <div className="mt-1 font-semibold">
            {products[item].size.includes('S') && <span className='border border-gray-500 px-1 mx-1'>S</span>} 
            {products[item].size.includes('M') && <span className='border border-gray-500 px-1 mx-1'>M</span>} 
            {products[item].size.includes('L') && <span className='border border-gray-500 px-1 mx-1'>L</span>} 
            {products[item].size.includes('XL') && <span className='border border-gray-500 px-1 mx-1'>XL</span>} 
            {products[item].size.includes('XXL') && <span className='border border-gray-500 px-1 mx-1'>XXL</span>} 
          </div>
          <div className="mt-1 font-semibold">
            {products[item].color.includes('Red') && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
            {products[item].color.includes('Blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
            {products[item].color.includes('Yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
            {products[item].color.includes('Black') && <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
          </div>
        </div>
        </Link>
      </div>})}
</section>
    );
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await  Product.find({category:"mug"})
  let mugs={}
  for(let item of products){
    if(item.slug in mugs){
      if(!mugs[item.slug].color.includes(item.color) && item.availableQty > 0){
        mugs[item.slug].color.push(item.color)
      }
      if(!mugs[item.slug].size.includes(item.size) && item.availableQty > 0){
        mugs[item.slug].size.push(item.size)
      }
        
    }
    else{
      mugs[item.slug]=JSON.parse(JSON.stringify(item))
      if(item.availableQty > 0){
        mugs[item.slug].color=[item.color]
        mugs[item.slug].size=[item.size]
      }
      else{
        mugs[item.slug].color=[]
        mugs[item.slug].size=[]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) },
  }
}
export default Mugs;
