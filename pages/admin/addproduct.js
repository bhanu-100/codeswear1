import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const addproduct = ({userDetail}) => {

    
  const router=useRouter()
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("tshirt");
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("Red");
  const [price, setPrice] = useState("");
  const [availableQty, setAvailableQty] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("token")){
      if(userDetail){
        if(userDetail.admin==false){
          router.push("/")
        }
      }
    }
    else{
      router.push("/")
    }
  }, [userDetail])

  const handleChange=(e)=>{
    if(e.target.name=="title"){
    setTitle(e.target.value)
     }
    else if(e.target.name=="slug"){
    setSlug(e.target.value)
     }
    else if(e.target.name=="img"){
    setImg(e.target.value)
     }
    else if(e.target.name=="desc"){
    setDesc(e.target.value)
     }
     else if(e.target.name=="category"){
    setCategory(e.target.value)
     }
     else if(e.target.name=="size"){
    setSize(e.target.value)
     }
     else if(e.target.name=="color"){
    setColor(e.target.value)
     }
     else if(e.target.name=="price"){
    setPrice(e.target.value)
     }
     else if(e.target.name=="availableQty"){
    setAvailableQty(e.target.value)
     }
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const data={title,slug,img,desc,size,category,color,price,availableQty};
    let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`,{
      method:'POST',
      headers:{"Content-type":"application/json",
    },
    body: JSON.stringify(data),

    })
    let response = await res.json()
  
    setTitle("")
    setSlug("")
    setDesc("")
    setImg("")
    setCategory("")
    setSize("")
    setColor("")
    setPrice("")
    setAvailableQty("")

    toast.success('Your Product has been added!', {
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

  return (
    <div className='min-h-full md:mt-10 mt-40'>
    <Head>
       <title>Addproduct - ietianswear.com</title>
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
        <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href={"/"} className="flex title-font font-medium items-center  justify-center text-gray-900">
           <Image src='/icon1.png' alt='' height={10} width={50} />
          </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add new product</h2>
          </div>
        
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6"  method="POST">
              <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Enter Title</label>
                <div className="mt-2">
                  <input value={title}  onChange={handleChange} id="title" name="title" type="text" autoComplete="title" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">Enter Slug</label>
                <div className="mt-2">
                  <input  value={slug} onChange={handleChange} id="slug" name="slug" type="text" autoComplete="slug" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <label htmlFor="img" className="block text-sm font-medium leading-6 text-gray-900">Enter Image Path</label>
                <div className="mt-2">
                  <input value={img} onChange={handleChange}  id="img" name="img" type="text" autoComplete="img" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">Enter Description</label>
                <div className="mt-2">
                  <input value={desc}  onChange={handleChange} id="desc" name="desc" type="text" autoComplete="desc" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">Enter Size</label>
                <div className="mt-2">
                  <select value={size}  onChange={handleChange} id="size" name="size" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
                   <option value="S">S</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
                   <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Enter Category</label>
                <div className="mt-2">
                <select value={category}  onChange={handleChange} id="category" name="category" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
                   <option value="tshirt">Tshirt</option>
                   <option value="hood">Hoodie</option>
                   <option value="mug">Mug</option>
                   <option value="cap">Cap</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">Enter Color(Red/Yellow/Blue/Black)</label>
                <div className="mt-2">
                <select value={color}  onChange={handleChange} id="color" name="color" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
                   <option value="Red">Red</option>
                   <option value="Yellow">Yellow</option>
                   <option value="Blue">Blue</option>
                   <option value="Black">Black</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Enter Price</label>
                <div className="mt-2">
                  <input value={price}  onChange={handleChange} id="price" name="price" type="text" autoComplete="price" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <label htmlFor="availableQty" className="block text-sm font-medium leading-6 text-gray-900">Enter availableQty</label>
                <div className="mt-2">
                  <input value={availableQty}  onChange={handleChange} id="availableQty" name="availableQty" type="text" autoComplete="title" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Add Product</button>
              </div>
            </form>
          </div>
        </div>    


    </div>
  )
}
export default addproduct;
