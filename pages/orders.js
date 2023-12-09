import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [date, setDate] = useState()
    const router= useRouter();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    useEffect(() => {
     
      const d = new Date()
      setDate(d)
      const fetchOrders=async()=>{
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
          method: "POST", // or 'PUT'
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({token:localStorage.getItem("token")}),
      })
      let res = await a.json()
       setOrders(res.orders)
      }
      if(!localStorage.getItem("token")){
        router.push("/")
      }
      else{
        fetchOrders();
      }
     
    }, [])
    return (      
<div className="py-14 mt-20 min-h-screen px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ">
<Head>
      <title>Orders - codeswear.com</title>
      </Head>
  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text- lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Name </h1>
    <p className="text-base dark:text-gray-600 font-medium leading-6 text-gray-700">{date && date.toLocaleDateString("en-US", options)}</p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text- font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
       {orders.map((item)=>{
         return <Link key={item._id} href={"/order?id="+item._id}>
         <div  className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
            <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />  
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text- xl:text-2xl font-semibold leading-6 text-gray-800">{item.email}</h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Price: </span>₹ {item.amount}</p>
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> {item.size}</p>
                <p className="text-sm dark:text- leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> {item.color}</p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text- xl:text-lg leading-6">Payment Status: <span className="text-red-500">{item.status}</span></p>
              <p className="text-base dark:text- xl:text-lg font-semibold leading-6 text-gray-800">Order Id: <span className="text-green-500">{item.orderId}</span></p>
            </div>
          </div> 
        </div>
        </Link>})}
      </div>
    </div>
  </div>
</div>
    );
}
export default Orders;
