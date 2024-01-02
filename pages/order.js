import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import Order from '@/models/Order';
import Head from 'next/head';
import mongoose from 'mongoose';
const MyOrder = ({order,clearCart}) => {
  const router = useRouter()
  const [date, setDate] = useState()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    const d = new Date(order.createdAt)
    setDate(d)
    if(router.query.clearCart==1)
    {
      clearCart();
    }
  }, []);
  let products=order.products;
    return (
        <section className="text-gray-600 body-font overflow-hidden min-h-screen">
          <Head>
      <title>Order - ietianswear.com</title>
      </Head>
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">IETIANSWEAR.COM</h2>
        <h1 className="text-gray-700 text-3xl title-font font-medium mb-4">Order Id #{order.orderId}</h1>
        <p className="leading-relaxed text-gray-900 ">Your order has been placed successfully.</p>
        <p> Your payment status is :  <span className="text-red-500">{order.status}</span></p>
        <p className="text-base dark:text-gray-600 font-medium leading-6 text-gray-700 mb-10"> Order Date: {date && date.toLocaleDateString("en-US", options)}</p>
        <div className="flex  mb-4">
          <a className="flex-grow  border-gray-500 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow  border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow  border-gray-300 py-2 text-lg px-1">Price</a>
        </div>
        {Object.keys(products).map((key)=>{
          return  <div key={key} className="flex border-t border-gray-200 py-2">
          <div className="text-gray-500 w-1/2 ">{products[key].name}( {products[key].size} / {products[key].variant} )</div>
          <div className="m-auto text-gray-900 w-1/4 ">{products[key].qty}</div>
          <div className="m-auto text-gray-900 w-1/4 ">₹ {products[key].price} X {products[key].qty} = ₹ {products[key].qty*products[key].price}</div>
         </div>
        })}
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-700">Subtotal: ₹{order.amount}</span>
          <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/1.webp"/>
    </div>
  </div>
</section>
    );
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let order = await  Order.findById(context.query.id)
  
  return {
    props: { order:JSON.parse(JSON.stringify(order)) },
  }
}
export default MyOrder;
