import React from 'react';
import Head from 'next/head';

const ShippingAndReturns = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Shipping and Returns - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Shipping and Returns</h1>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Shipping Information</h2>
                    <p className='text-lg mb-4'>
                        We offer fast and reliable shipping options to ensure your order reaches you promptly. Here are the details:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Standard Shipping: 3-5 business days</li>
                        <li>Express Shipping: 1-2 business days</li>
                        <li>Free shipping on orders over ₹999</li>
                    </ul>
                    <p className='text-lg mt-4'>
                        You will receive a tracking number via email once your order has been shipped.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Return Policy</h2>
                    <p className='text-lg mb-4'>
                        We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Returns accepted within 30 days of receipt.</li>
                        <li>Items must be in original condition, unworn, and with tags attached.</li>
                        <li>To initiate a return, please contact our customer support.</li>
                    </ul>
                    <p className='text-lg mt-4'>
                        Refunds will be processed to your original payment method once the returned item is received and inspected.
                    </p>
                </section>

                <section className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Need Assistance?</h2>
                    <p className='text-lg'>
                        If you have any questions regarding shipping or returns, please reach out to our customer support at <a href='mailto:ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ShippingAndReturns;
