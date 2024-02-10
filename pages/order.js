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
        <p> Your payment status is :  <span className="text-green-500">{order.status}</span></p>
        <div className="text-base dark:text- xl:text-lg leading-6">Total Amount: <span className="text-pink-800">{order.amount}</span></div>
        <div className="text-base dark:text- xl:text-lg leading-6">Delivery Status: <span className="text-pink-800">{order.delivery}</span></div>
        <div className="text-base dark:text- xl:text-lg leading-6">Address: <span className="text-pink-800">{`${order.name},${order.address},${order.city},${order.state},${order.pincode},${order.phone},${order.email}`}</span></div>
        <p className="text-base dark:text-gray-600 font-medium leading-6 text-gray-700 mb-10"> Order Date: {date && date.toLocaleDateString("en-US", options)}</p>
            {Object.keys(products).map((key)=>{
            return <div key={key} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img className="w-full hidden md:block" src={`${products[key].img}`} alt="dress" />
            <img className="w-full md:hidden" src={`${products[key].img}`} alt="dress" />  
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text- xl:text-2xl font-semibold leading-6 text-gray-800">{products[key].name}</h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Price: </span>₹ {products[key].price}</p>
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> {products[key].size}</p>
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Quantity: </span> {products[key].qty}</p>
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> {products[key].variant}</p>
              </div>
            </div>
          
          </div> 
        </div>})}
        
          <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
        </div>
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
