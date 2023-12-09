import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import Head from 'next/head'
import Script from 'next/script';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const jwt = require('jsonwebtoken');
const Paytm = require('paytmchecksum');

const CheckOut = ({user,Cart,clearCart, addToCart, removeFromCart, SubTotal }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [pincode, setPincode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [disabled, setDisabled] = useState(true)
       
    let decoded = jwt.decode(user.value);
    const handleChange = async(e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name == "phone") {
            setPhone(e.target.value)
        }
        else if (e.target.name == "address") {     
            setAddress(e.target.value)
        }
        else if (e.target.name == "pincode") {
            setPincode(e.target.value)
         if(e.target.value.length==6){
            let pins= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
            let pinJson = await pins.json()
            if(Object.keys(pinJson).includes(e.target.value)){
                setCity(pinJson[e.target.value][0])
                setState(pinJson[e.target.value][1])
            }
            else{
               setCity("")
               setState("")
            }
         }
         else{
            setCity("")
            setState("")
         }
        }

        if (name.length > 3 && email.length > 3 && phone.length > 3 && address.length > 3 && pincode.length > 3) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    const initiatePayment = async () => {
        let oid = Math.floor(Math.random() * Date.now())
        let data = { oid, Cart, SubTotal, email,address,name,pincode,city,state,phone }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,{mode:"no-cors"}, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        let txnRes = await a.json()
        if(txnRes.success){ 
        let txnToken=txnRes.txnToken
        var config = {
            "root": "",
            "flow": "DEFAULT",
            "data": {
                "orderId": oid, /* update order id */
                "token": txnToken, /* update token value */
                "tokenType": "TXN_TOKEN",
                "amount": SubTotal /* update amount */
            },
            "handler": {
                "notifyMerchant": function (eventName, data) {
                    console.log("notifyMerchant handler function called");
                    console.log("eventName => ", eventName);
                    console.log("data => ", data);
                }
            }
        };

        // initialze configuration using init method
        window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
        }).catch(function onError(error) {
            console.log("error => ", error);
        });
    }
    else{
        console.log(txnRes.error)
        if(txnRes.cartClear){
        clearCart();
        }
        toast.error(txnRes.error, {
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
    return (
    <div className='min-h-screen mt-20'>
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
        <div className='container m-auto '>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
                <title>CheckOut - codeswear.com</title>
            </Head>
            <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} />
            <h1 className='font-bold text-3xl my-8 text-center'>CheckOut</h1>
            <h2 className='font-bold my-8'>1.Delivery Details</h2>
            <div className='mx-auto flex'>
                <div className='px-2 w-1/2'>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                       {user.value ? <input onClick={()=>{setName(decoded.name)}} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} /> : <input value={name} onChange={handleChange} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}
                    </div>
                </div>
                <div className='px-2 w-1/2'>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        {user.value ? <input onClick={()=>{ setEmail(decoded.email)}} value={email}   type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />: <input value={email} onChange={handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}
                        
                    </div>
                </div>
            </div>
            <div className='px-2'>
                <div className='mx-auto flex'>
                    <div className='px-2 w-1/2'>
                        <div className="relative mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                           {user.value && decoded.phone? <input  onClick={()=>{setPhone(decoded.phone)}} value={phone} type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} /> : <input value={phone} onChange={handleChange} type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}
                        </div>
                    </div>
                    <div className='px-2 w-1/2'>
                        <div className="relative mb-4">
                            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                            {user.value && decoded.pincode? <input value={pincode} onClick={()=>{setPincode(decoded.pincode)}} onMouseLeave={handleChange}  type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} /> : <input value={pincode} onChange={handleChange} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}
                        </div>
                    </div>
                </div>
                <div className='mx-auto flex'>
                    <div className='px-2 w-1/2'>
                        <div className="relative mb-4">
                            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input   onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true}  />
                        </div>
                    </div>
                    <div className='px-2 w-1/2'>
                        <div className="relative mb-4">
                            <label htmlFor="state"  className="leading-7 text-sm text-gray-600">State</label>
                            <input  onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
                        </div>
                    </div>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                   {user.value && decoded.phone ?  <textarea onClick={()=>{setAddress(decoded.address)}} onMouseLeave={handleChange} value={address}  id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-15  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" readOnly={true}></textarea> : <textarea value={address} onChange={handleChange} id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-15  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>}
                </div>
            </div>
            <h2 className='font-bold my-8'>2.Review Cart items & Pay</h2>
            <div className='sideCart p-10 bg-pink-200'>
                <ol className='list-decimal font-semibold'>
                    {Object.keys(Cart).length == 0 && <div className='my-2 '>Your Cart is Empty!</div>}
                    {Object.keys(Cart).map((k) => {
                        return <li key={k}>
                            <div className='item flex my-5'>
                                <div className='font-semibold w-2/3'>{Cart[k].name}({Cart[k].size}/{Cart[k].variant})</div>
                                <div className=' flex items-center justify-center font-semibold w-1/3'><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant) }} className='text-pink-400 text-xl cursor-pointer' /><span className='mx-2 text-sm'>{Cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant) }} className='text-pink-400 text-xl cursor-pointer' /></div>
                            </div>
                        </li>
                    })}
                </ol>
                <div className='font-bold text-xl'>SubTotal: ₹{SubTotal}</div>
            </div>
            <div className='flex  mt-5'>
                <Link href={"/checkout"}><button onClick={initiatePayment} disabled={disabled} className=" disabled:bg-pink-300 flex m-1 text-white bg-pink-500 border-0 py-3 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />PAY  ₹{SubTotal}</button></Link>
            </div>
        </div>
        </div>
    );
}
export default CheckOut;
