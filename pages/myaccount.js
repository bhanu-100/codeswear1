import React , { useEffect ,useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myaccount = ({user,userDetail,Signout}) => {
    const [name, setName] = useState("")
    const [opassword, setOpassword] = useState("")
    const [npassword, setNpassword] = useState("")
    const [cnpassword, setCnpassword] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [pincode, setPincode] = useState("")
    const router= useRouter();

    useEffect(() => {
        
        if(!localStorage.getItem("token")){
            router.push("/")
        }
    }, [])
    const handleChange = async(e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        else if (e.target.name == "phone") {
            setPhone(e.target.value)
        }
        else if (e.target.name == "address") {     
            setAddress(e.target.value)
        }
        else if (e.target.name == "pincode") {
            setPincode(e.target.value)
        }
        else if (e.target.name == "opassword") {
            setEmail(userDetail.email)
            setOpassword(e.target.value)
        }
        else if (e.target.name == "npassword") {
            setNpassword(e.target.value)
        }
        else if (e.target.name == "cnpassword") {
            setCnpassword(e.target.value)
        }
    }
    const updateUser = async()=>{
        let data = {email,address,name,pincode,phone }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
         await a.json()
         toast.success('User details updated. please login again!', {
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
    const changePassword = async()=>{
        if(npassword == cnpassword){
        let data = {email,opassword,npassword,cnpassword }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/changepassword`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        let p = await a.json()
        if(p.success)
        {
         toast.success('Password changed. please login again!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         Signout();
        }
        else{
            toast.error('Something went wrong. please try again!', {
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
        else{
            toast.error('New password not matched with confirm password. please try again!', {
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
    <div className='min-h-screen md:mt-20 mt-44'>
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
      <title>Myaccount - ietianswear.com</title>
      </Head>
      <h2 className='font-bold text-2xl flex items-center justify-center my-8'>My Account</h2>
      <div className='container mx-auto px-4'>           
    <h2 className='font-bold my-8 text-xl sm:text-2xl'>1. Update Delivery Details</h2>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 px-2'>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input value={name} onChange={handleChange} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
        <div className='w-full md:w-1/2 px-2'>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email (Cannot Change)</label>
                <input value={email} onClick={()=>{setEmail(userDetail.email)}} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
            </div>
        </div>
    </div>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 px-2'>
            <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                <input value={phone} onChange={handleChange} type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
        <div className='w-full md:w-1/2 px-2'>
            <div className="relative mb-4">
                <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                <input value={pincode} onChange={handleChange} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
    </div>              
    <div className="relative mb-4">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea value={address} onChange={handleChange} id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-15 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <div>
        <button onClick={updateUser} className="flex justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Update Details</button>
    </div>
    <h2 className='font-bold my-8 text-xl sm:text-2xl'>2. Change Password</h2>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/3 px-2'>
            <div className="relative mb-4">
                <label htmlFor="opassword" className="leading-7 text-sm text-gray-600">Old Password</label>
                <input value={opassword} onChange={handleChange} type="password" id="opassword" name="opassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
        <div className='w-full md:w-1/3 px-2'>
            <div className="relative mb-4">
                <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
                <input value={npassword} onChange={handleChange} type="password" id="npassword" name="npassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
        <div className='w-full md:w-1/3 px-2'>
            <div className="relative mb-4">
                <label htmlFor="cnpassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                <input value={cnpassword} onChange={handleChange} type="password" id="cnpassword" name="cnpassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
    </div>
    <div>
        <button onClick={changePassword} className="flex mb-10 justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Change Password</button>
    </div>
</div>

    </div>
    );
}

export default Myaccount;
