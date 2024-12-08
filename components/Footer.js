import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-pink-200 text-gray-600 body-font shadow-sm">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src='/logo1.png' alt='Codewear Logo' height={40} width={200} />
                    </Link>
                    <p className="mt-2 text-sm text-gray-500 mx-1">Collection: Premium T-Shirts, Hoodies, Mugs, and Caps for college students!</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-3">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/tshirts" className="text-gray-600 hover:text-gray-800">Tshirts</Link>
                            </li>
                            <li>
                                <Link href="/hoodies" className="text-gray-600 hover:text-gray-800">Hoodies</Link>
                            </li>
                            <li>
                                <Link href="/mugs" className="text-gray-600 hover:text-gray-800">Mugs</Link>
                            </li>
                            <li>
                                <Link href="/caps" className="text-gray-600 hover:text-gray-800">Caps</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-3">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT US</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/securepaymentgateway" className="text-gray-600 hover:text-gray-800">Secure Payment Gateway</Link>
                            </li>
                            <li>
                                <Link href="/customersupport" className="text-gray-600 hover:text-gray-800">Customer Support</Link>
                            </li>
                            <li>
                                <Link href="/shippingandreturns" className="text-gray-600 hover:text-gray-800">Shipping and Returns</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-3">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">OUR POLICY</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/privacypolicy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/termsandcondition" className="text-gray-600 hover:text-gray-800">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link href="/returnandrefundpolicy" className="text-gray-600 hover:text-gray-800">Return and Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/cancellationpolicy" className="text-gray-600 hover:text-gray-800">Cancellation Policy</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-3">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">Rishi Dubey</span>
                            </li>
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">+91 7000525501</span>
                            </li>
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">rishidubey652@gmail.com</span>
                            </li>
                            <li>
                                <span className="text-gray-600 hover:text-gray-800">ADDRESS-IET DAVV, INDORE, 452020</span>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-pink-300">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Codewear.com — All Rights Are Reserved</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link className="ml-3 text-gray-500" href="https://www.facebook.com/profile.php?id=100009914970814&mibextid=rS40aB7S9Ucbxw6v">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500" href="https://twitter.com/@BhanuPr62387506">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500" href="https://www.instagram.com/bhanu_thakur_bt?igsh=OGQ5ZDc2ODk2ZA==">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-500" href="https://www.linkedin.com/in/bhanu-pratap-singh-7b7841224?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3BlPWOOMIMRtGG9JQAXGI6QA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
  }
export default Footer;
