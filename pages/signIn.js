import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const SignIn = () => {

  const router=useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/")
    }
  }, [])
  
  const handleChange=(e)=>{
    if(e.target.name=="email"){
    setEmail(e.target.value)
     }
    else if(e.target.name=="password"){
    setPassword(e.target.value)
     }
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const data={email,password};
    let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signIn`,{
      method:'POST',
      headers:{"Content-type":"application/json",
    },
    body: JSON.stringify(data),

    })
    let response = await res.json()
    setEmail("")
    setPassword("")
    if(response.success){
      localStorage.setItem("token",response.token)
    toast.success('You successfully logged In!', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      router.push(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    else{
      toast.error(response.error, {
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
        <div className='min-h-screen md:mt-10 mt-40'>
          <Head>
      <title>SignIn - ietianswear.com</title>
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
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <Link href={"/forgot"} className="font-semibold text-pink-600 hover:text-pink-500">Forgot password?</Link>
          </div>
        </div>
        <div className="mt-2">
          <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Or Create an account
      <Link href={"/signUp"} className="font-semibold leading-6 text-pink-600 hover:text-pink-500"> Sign Up </Link>
    </p>
  </div>
</div>       
</div>
    );
}

export default SignIn;