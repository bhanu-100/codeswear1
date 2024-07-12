import React from "react";
import Head from "next/head";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  height: '600px',
};

const slideImages = [
  { url: '1.webp' },
  { url: '2.webp' },
  { url: '3.webp' },
  { url: '4.webp' },
  { url: '5.webp' },
  { url: '6.webp' },
];

const Home = () => {
  return (
    <main className="min-h-screen md:mt-10 mt-40">
      <Head>
        <title>Home - ietianswear.com</title>
      </Head>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="each-slide">
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }} />
            </div>
          ))}
        </Slide>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-pink-500">
              IETIANSWEAR-WEAR THE CODE
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              "Collection: Premium T-Shirts, Hoodies, Mugs, and Caps for college students!"
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              {
                title: "Coding-Themed Apparel",
                description: "Offer a wide range of clothing and accessories inspired by coding and programming languages.",
              },
              {
                title: "Customization Options",
                description: "Allow customers to personalize their apparel with code snippets or specific design elements.",
              },
              {
                title: "Quality and Comfort",
                description: "Ensure high-quality materials for comfort, encouraging repeated purchases.",
              },
              {
                title: "Developer Tools & Gadgets",
                description: "Include a selection of tech accessories and tools that appeal to programmers.",
              },
              {
                title: "Community Engagement",
                description: "Provide forums or blogs for users to share coding experiences and tips.",
              },
              {
                title: "User-Friendly Interface",
                description: "Design an intuitive site with easy navigation and robust search options for a seamless shopping experience.",
              },
            ].map((item, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg text-pink-500 font-medium title-font mb-2">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
