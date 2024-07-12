import '@/style/globals.css'
import { Inter, Stick } from 'next/font/google'
import Navbar from '@/components/Navbar'    
import Footer from '@/components/Footer'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router';
const inter = Inter({ subsets: ['latin'] })
const jwt = require('jsonwebtoken');

export const metadata = {
  title: 'ietianswear',
  description: 'Wear the code',
}
export default function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const [Cart, setCart] = useState({});
  const [SubTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({value:null});
  const [key, setKey] = useState();
  const [userDetail, setUserDetail] = useState({});
  
  const Router = useRouter();
 
  useEffect(() => {
    Router.events.on("routeChangeStart",()=>{
      setProgress(70)
    })
    Router.events.on("routeChangeComplete",()=>{
      setProgress(100)
    })
    try {
      if(localStorage.getItem("Cart")){
         setCart(JSON.parse(localStorage.getItem("Cart")))
         SaveCart(JSON.parse(localStorage.getItem("Cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }

    const token = localStorage.getItem('token');

    const fetchUserDetail = async(email) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/userdetail`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const res = await response.json();
        setUserDetail(res.user);
    };

    if (token) {
      setUser({ value: token });
      const decoded = jwt.decode(token);
      if (decoded && decoded.email) {
        fetchUserDetail(decoded.email);
      }
    }
    setKey(Math.random())
  }, [Router.query]);

  const Signout=()=>{
    localStorage.removeItem("token")
    setUser({value:null})
    setUserDetail({})
    setKey(Math.random())
    Router.push("/")
  }
  const SaveCart=(myCart)=>{
    localStorage.setItem("Cart",JSON.stringify(myCart))
    let subt=0;
    let keys=Object.keys(myCart)
    for(let i=0;i<keys.length;i++){
      subt+=myCart[keys[i]].price*myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }
  const addToCart=(itemCode,qty,price,name,size,variant,img)=>{
      let newCart=Cart;
      if(itemCode in Cart){
        newCart[itemCode].qty=Cart[itemCode].qty+qty;
      }
      else{
          newCart[itemCode]={qty: 1 ,price,name,size,variant,img};
      }
      setCart(newCart)
      SaveCart(newCart)
      toast.success('Item added to cart!', {
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
  const removeFromCart=(itemCode,qty,price,name,size,variant,img)=>{
    let newCart=Cart;
    if(itemCode in Cart){
      newCart[itemCode].qty=Cart[itemCode].qty-qty;
    }
    if(newCart[itemCode].qty<=0)
    {
      delete newCart[itemCode];
    }
    setCart(newCart)
    SaveCart(newCart)
}
const buyNow=(itemCode,qty,price,name,size,variant,img)=>{
  let newCart={}
  newCart[itemCode]= {qty: 1 ,price,name,size,variant,img};
    setCart(newCart);
    SaveCart(newCart);
    Router.push('/checkout')
}
  const clearCart=()=>{
    setCart({})
    SaveCart({})
    toast.success('Cart clear!', {
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
    <>
          <LoadingBar
              color='#ff2d55'
              progress={progress}
              waitingTime={400}
              onLoaderFinished={() => setProgress(0)}
            />
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
      {key && <div className=' w-full fixed z-50 top-0'>  <Navbar Signout={Signout}  user={user} userDetail={userDetail} key={key} Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} SubTotal={SubTotal}/></div>}
      <Component buyNow={buyNow} user={user} userDetail={userDetail} Signout={Signout} Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} SubTotal={SubTotal}  {...pageProps} />
      <Footer/>
    </>
  )
}