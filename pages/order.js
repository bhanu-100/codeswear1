import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import Order from '@/models/Order';
import Head from 'next/head';
import Link from 'next/link';
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = ({order,clearCart,userDetail}) => {
  const router = useRouter()
  const [date, setDate] = useState()
  const [status, setStatus] = useState(order.status);
  const [delivery, setDelivery] = useState(order.delivery);
  const [address, setAddress] = useState(order.address);  
  const [name, setName] = useState(order.name);
  const [city, setCity] = useState(order.city);
  const [state, setState] = useState(order.state);
  const [pincode, setPincode] = useState(order.pincode);
  const [phone, setPhone] = useState(order.phone);
  const [email, setEmail] = useState(order.email);

  
  const handleChange=(e)=>{
    if(e.target.name=="status"){
      setStatus(e.target.value)
    }
    else if(e.target.name=="delivery"){
      setDelivery(e.target.value)
    }
    else if(e.target.name=="address"){
    setAddress(e.target.value)
     }
    else if(e.target.name=="name"){
    setName(e.target.value)
     }
     else if(e.target.name=="phone"){
    setPhone(e.target.value)
     }
     else if(e.target.name=="pincode"){
    setPincode(e.target.value)
     }
     else if(e.target.name=="email"){
    setEmail(e.target.value)
      }
       else if(e.target.name=="city"){
    setCity(e.target.value)
     }
     else if(e.target.name=="state"){
    setState(e.target.value)
     }
  }
  const handleSubmit= async(e)=>{
    const orderId = order.orderId;
    e.preventDefault()
    const data={status,delivery,address,name,pincode,city,state,email,phone,orderId};
    let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateorder`,{
      method:'POST',
      headers:{"Content-type":"application/json",
    },
    body: JSON.stringify(data),

    })
    let response = await res.json()
    if(response.success){
    toast.success('Your Details has been updated!', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}

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
        <section className="text-gray-600 body-font overflow-hidden min-h-screen md:mt-10 mt-32">
          <Head>
      <title>Order - ietianswear.com</title>
      </Head>
      <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">IETIANSWEAR.COM</h2>
            <h1 className="text-gray-700 text-3xl title-font font-medium mb-4">Order Id #{order.orderId}</h1>
            <p className="leading-relaxed text-gray-900">Your order has been placed successfully.</p>
            <p>Your payment status is: <span className="text-green-500">{status}</span></p>
            <div className="text-base xl:text-lg leading-6">Total Amount: <span className="text-pink-800">{order.amount}</span></div>
            <div className="text-base xl:text-lg leading-6">Delivery Status: <span className="text-pink-800">{delivery}</span></div>
            <div className="text-base xl:text-lg leading-6">
                Address: <span className="text-pink-800">
                    {`${order.name} ${order.address} ${order.city} ${order.state} ${order.pincode} ${order.phone} ${order.email}`}
                </span>
            </div>
            <p className="text-base dark:text-gray-600 font-medium leading-6 text-gray-700 mb-10">
                Order Date: {date && date.toLocaleDateString("en-US", options)}
            </p>

            {Object.keys(products).map((key) => (
                <div key={key} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img className="w-full hidden md:block" src={`${products[key].img}`} alt="product" />
                        <img className="w-full md:hidden" src={`${products[key].img}`} alt="product" />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{products[key].name}</h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Price: </span>₹ {products[key].price}
                                </p>
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Size: </span> {products[key].size}
                                </p>
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Quantity: </span> {products[key].qty}
                                </p>
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Color: </span> {products[key].variant}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Link href="https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx"><button className="flex m-auto mt-10 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                Track Order
            </button></Link>
          
        </div>

        {userDetail.admin && <div className="md:ml-20 ml-0">
            <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div className="flex md:flex-row flex-col">
                    <div className="mr-10">
                        <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">Update payment status</label>
                        <div className="mt-2">
                            <select value={status} onChange={handleChange} id="status" name="status" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
                                <option value="Initiated">Initiated</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="delivery" className="block text-sm font-medium leading-6 text-gray-900">Update Delivery status</label>
                        <div className="mt-2">
                            <select value={delivery} onChange={handleChange} id="delivery" name="delivery" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
                                <option value="shipped">shipped</option>
                                <option value="unshipped">unshipped</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Update Name</label>
                    <div className="mt-2">
                        <input value={name} onChange={handleChange} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Update Email</label>
                    <div className="mt-2">
                        <input value={email} onChange={handleChange} id="email" name="email" type="text" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="mr-10">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Update Phone</label>
                        <div className="mt-2">
                            <input value={phone} onChange={handleChange} id="phone" name="phone" type="text" autoComplete="phone" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">Update Pincode</label>
                        <div className="mt-2">
                            <input value={pincode} onChange={handleChange} id="pincode" name="pincode" type="text" autoComplete="pincode" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Update Address</label>
                    <div className="mt-2">
                        <input value={address} onChange={handleChange} id="address" name="address" type="text" autoComplete="address" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="mr-10">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Update City</label>
                        <div className="mt-2">
                            <input value={city} onChange={handleChange} id="city" name="city" type="text" autoComplete="city" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">Update State</label>
                        <div className="mt-2">
                            <input value={state} onChange={handleChange} id="state" name="state" type="text" autoComplete="state" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                        Update
                    </button>
                </div>
            </form>
        </div>}
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
