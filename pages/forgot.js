import Link from 'next/link';
import React , { useEffect ,useState}from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const Forgot = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
  const router=useRouter()
  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/")
    }
  }, [])
  const recallPassword = async()=>{
    let data = {email}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    let p = await a.json()
    if(p.success)
    {setPassword("The password has been sent to your email.")}
    else{
      setPassword("Your email address is incorrect.")
    }
  }
    return (
        <div className='md:mt-10 mt-40 min-h-screen'>
          <Head>
            <title>Forgot Password - ietianswear.com</title>
           </Head>
        <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href={"/"} className="flex title-font font-medium items-center  justify-center text-gray-900">
          <Image src='/icon1.png' alt='' height={10} width={50} />
          </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Your Password</h2>
          </div>
        
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className='mb-5'>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className=' my-5 block text-sm font-medium leading-6 text-gray-900'> Your Password : <span className='text-pink-700 text-sm font-medium'> {password} </span></div>
              <div>
                <button onClick={recallPassword} className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Forgot</button>
              </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Or 
              <Link href={"/signIn"} className="font-semibold leading-6 text-pink-600 hover:text-pink-500"> Sign In </Link>
            </p>
          </div>
        </div>       
        </div>
    );
}

export default Forgot;
