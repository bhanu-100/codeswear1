import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
import Product from '@/models/Product'
import mongoose from 'mongoose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default  function Page({buyNow,addToCart,product,variants}) {
  const router = useRouter()
  const {slug}=router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);
  const [stock, setStock] = useState(true);
  useEffect(() => {
    setColor(product.color)
    setSize(product.size)
  if(product.availableQty > 0)
   { setStock(true)}
  else{
     setStock(false)
    }
 }, [router.query])
 
  const checkServiceability =async()=>{
   let pins= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
   let pinJson = await pins.json()
   if(Object.keys(pinJson).includes(pin)){
   setService(true)
   toast.success('Pincode is serviceable', {
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
   else{
   setService(false)
   toast.error('Sorry! Pincode not serviceable', {
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
  const onChangePin=(e)=>{
    setPin(e.target.value)
  }
 
  const refreshvariant=(newColor,newSize)=>{
      let url=`${process.env.NEXT_PUBLIC_HOST}/product/${variants[newColor][newSize]["slug"]}`
      // window.location=url
      router.push(url)
  }
  return (
    <section className="text-gray-600 body-font min-h-screen overflow-hidden md:mt-10 mt-40">     
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
    <Head>
      <title>{product.title} - ietianswear.com</title>
    </Head>
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img 
        alt="ecommerce" 
        className="lg:w-1/2 w-full lg:h-auto h-64 object-contain lg:object-cover object-center" 
        src={`${product.img}`} 
      />

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
          <p className="leading-relaxed">{product.desc}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              {Object.keys(variants).includes("Red") && Object.keys(variants["Red"]).includes(size) &&  
                <button 
                  onClick={() => refreshvariant("Red", size)} 
                  className={`border-2 ml-1 bg-red-700 rounded-full w-6 h-6 ${color === "Red" ? "border-black" : "border-gray-300"}`}
                ></button>
              }
              {Object.keys(variants).includes("Blue") && Object.keys(variants["Blue"]).includes(size) &&  
                <button 
                  onClick={() => refreshvariant("Blue", size)} 
                  className={`border-2 ml-1 bg-blue-700 rounded-full w-6 h-6 ${color === "Blue" ? "border-black" : "border-gray-300"}`}
                ></button>
              }
              {Object.keys(variants).includes("Black") && Object.keys(variants["Black"]).includes(size) &&  
                <button 
                  onClick={() => refreshvariant("Black", size)} 
                  className={`border-2 ml-1 bg-gray-900 rounded-full w-6 h-6 ${color === "Black" ? "border-black" : "border-gray-300"}`}
                ></button>
              }
              {Object.keys(variants).includes("Yellow") && Object.keys(variants["Yellow"]).includes(size) &&  
                <button 
                  onClick={() => refreshvariant("Yellow", size)} 
                  className={`border-2 ml-1 bg-yellow-700 rounded-full w-6 h-6 ${color === "Yellow" ? "border-black" : "border-gray-300"}`}
                ></button>
              }
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select 
                  defaultValue={size} 
                  onChange={(e) => refreshvariant(color, e.target.value)} 
                  className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                >
                  {Object.keys(variants[color]).includes("S") && <option value={"S"}>S</option>}
                  {Object.keys(variants[color]).includes("M") && <option value={"M"}>M</option>}
                  {Object.keys(variants[color]).includes("L") && <option value={"L"}>L</option>}
                  {Object.keys(variants[color]).includes("XL") && <option value={"XL"}>XL</option>}
                  {Object.keys(variants[color]).includes("XXL") && <option value={"XXL"}>XXL</option>}
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            {stock ? (
              <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
            ) : (
              <span className="title-font font-medium text-2xl text-gray-900">Out of stock!</span>
            )}
            <div className='flex'>
              <button 
                disabled={!stock} 
                onClick={() => buyNow(product.slug, 1, product.price, product.title, size, color, product.img)} 
                className="disabled:bg-pink-300 flex mx-5 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded"
              >
                Buy Now
              </button>
              <button 
                disabled={!stock} 
                onClick={() => addToCart(product.slug, 1, product.price, product.title, size, color, product.img)} 
                className="disabled:bg-pink-300 flex mx-5 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className='pin mt-6 flex space-x-2 text-sm'>
            <input 
              onChange={onChangePin} 
              type='text' 
              className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
              placeholder='Enter your pincode' 
            />
            <button 
              onClick={checkServiceability} 
              className="flex ml-10 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
            >
              Check
            </button>
          </div>
          {service === false && service != null && 
            <div className='text-red-500 mt-3 text-sm'>
              Sorry! We do not deliver to this pincode yet.
            </div>
          }
          {service === true && service != null && 
            <div className='text-green-500 mt-3 text-sm'>
              Yay! This pincode is serviceable.
            </div>
          }
        </div>
      </div>
    </div>
  </section>
  
)
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await  Product.findOne({slug:context.query.slug})
  let variants = await  Product.find({title:product.title, category:product.category})
  let colorSizeSlug={}
  for(let item of variants){
    if(Object.keys(colorSizeSlug).includes(item.color)){
    colorSizeSlug[item.color][item.size]={slug:item.slug}
  }
  else{
    colorSizeSlug[item.color]={}
    colorSizeSlug[item.color][item.size]={slug:item.slug}
  }
  }
  return {
    props: { product: JSON.parse(JSON.stringify(product)),variants: JSON.parse(JSON.stringify(colorSizeSlug)) },
  }
}