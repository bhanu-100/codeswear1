import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const addadmin = ({userDetail}) => {
    const router=useRouter()
    const [email, setEmail] = useState("");
    const [admin, setAdmin] = useState(false);
  
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
        if(e.target.name=="email"){
        setEmail(e.target.value)
         }
         else if(e.target.name=="admin"){
         setAdmin(e.target.value);
         }
        }
      const handleSubmit= async(e)=>{
        e.preventDefault()
        const data={email,admin};
        let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addadmin`,{
          method:'POST',
          headers:{"Content-type":"application/json",
        },
        body: JSON.stringify(data),
    
        })
        let response = await res.json()
        
        toast.success('Admin status has been changed!', {
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
           <title>Addadmin - ietianswear.com</title>
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
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add new Admin</h2>
          </div>
        
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6"  method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Enter Email</label>
                <div className="mt-2">
                  <input value={email}  onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
      <label htmlFor="admin" className="block text-sm font-medium leading-6 text-gray-900">Update Admin Status</label>
                <div className="mt-2">
                  <select value={admin}  onChange={handleChange} id="admin" name="admin" className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
                   <option value="true">YES</option>
                   <option value="false">NO</option>
                  </select>
                </div>
    </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Add Admin</button>
              </div>
            </form>
          </div>
        </div>    


    </div>
  )
}
export default addadmin;
