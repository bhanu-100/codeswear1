import React from 'react';
import Head from 'next/head';

const CancellationPolicy = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Cancellation Policy - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Cancellation Policy</h1>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Introduction</h2>
                    <p className='text-lg'>
                        At ietianswear.com, we strive to provide the best service to our customers. If you need to cancel your order, we’re here to help. This cancellation policy outlines the rules and regulations for canceling an order on our website.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Order Cancellation</h2>
                    <p className='text-lg'>
                        You can cancel your order within 24 hours of placing it. To cancel your order, please contact us at <a href='mailto:ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a> with your order details. If your order has already been processed or shipped, cancellation will not be possible.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Refunds for Cancellations</h2>
                    <p className='text-lg'>
                        If you cancel your order within the allowed timeframe, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Non-Cancellable Items</h2>
                    <p className='text-lg'>
                        Certain items are non-cancellable and non-refundable once the order has been placed. These items include:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Personalized or customized products</li>
                        <li>Perishable goods</li>
                        <li>Items on sale or clearance</li>
                    </ul>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <p className='text-lg'>
                        If you have any questions regarding our cancellation policy, please contact us at <a href='mailto:ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default CancellationPolicy;
