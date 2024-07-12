import React from 'react';
import Head from 'next/head';

const CustomerSupport = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Customer Support - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Customer Support</h1>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <p className='text-lg mb-4'>
                        We are here to help you! If you have any questions, concerns, or need assistance, please reach out to us through one of the following methods:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Email: <a href='mailto:ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a></li>
                        <li>Phone: +91 6263466850</li>
                        <li>Live Chat: Available 24/7 on our website</li>
                    </ul>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Frequently Asked Questions (FAQs)</h2>
                    <div className='text-lg mb-4'>
                        <p className='font-bold'>Q1: How do I track my order?</p>
                        <p>A: You can track your order using the tracking link sent to your email or by logging into your account on our website.</p>
                    </div>
                    <div className='text-lg mb-4'>
                        <p className='font-bold'>Q2: What is your return policy?</p>
                        <p>A: We offer a 30-day return policy on all items. Please visit our Returns page for more details.</p>
                    </div>
                    <div className='text-lg mb-4'>
                        <p className='font-bold'>Q3: How can I change my order?</p>
                        <p>A: If you need to change your order, please contact us as soon as possible. We will do our best to accommodate your request.</p>
                    </div>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Shipping Information</h2>
                    <p className='text-lg'>
                        We offer fast and reliable shipping options to ensure your order reaches you in a timely manner. For more information on our shipping policies, please visit our Shipping Information page.
                    </p>
                </section>

                <section className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Need More Help?</h2>
                    <p className='text-lg'>
                        If you have any other questions or need further assistance, please do not hesitate to contact our support team. We are here to ensure you have a great shopping experience with ietianswear.com.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default CustomerSupport;
