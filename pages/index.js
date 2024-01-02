import React from "react";
import Head from "next/head";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  height:"600px"
}
const slideImages = [
  {
    url: '1.webp',
  },
  {
    url: '2.webp',
  },
  {
    url: '3.webp',
  },
  {
    url: '4.webp',
  },
  {
    url: '5.webp',
  },
  {
    url: '6.webp',
  }
];
const Home=()=> {
  return (
    <main className="min-h-screen mt-16">
      <Head>
      <title>Home - ietianswear.com</title>
      </Head>
       <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
              </div>
              ))} 
              </Slide>
            </div> 
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-pink-500">IETIANSWEAR-WEAR THE CODE</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">"Code for Change: Wear the Future. Shop Eco-Friendly Threads & Tech!"</p>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">"Code, Create, Conserve: Wear the Change"</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">Coding-Themed Apparel</h2>
                  <p className="leading-relaxed text-base">Offer a wide range of clothing and accessories inspired by coding and programming languages.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">Customization Options</h2>
                  <p className="leading-relaxed text-base">Allow customers to personalize their apparel with code snippets or specific design elements.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">Quality and Comfort</h2>
                  <p className="leading-relaxed text-base"> Ensure high-quality materials for comfort, encouraging repeated purchases.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">Developer Tools & Gadgets</h2>
                  <p className="leading-relaxed text-base">Include a selection of tech accessories and tools that appeal to programmers.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">Community Engagement</h2>
                  <p className="leading-relaxed text-base">Provide forums or blogs for users to share coding experiences and tips.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">User-Friendly Interface</h2>
                  <p className="leading-relaxed text-base"> Design an intuitive site with easy navigation and robust search options for a seamless shopping experience.</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
        </main>
  );
}
export default Home;
