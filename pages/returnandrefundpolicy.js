import React from 'react';
import Head from 'next/head';

const ReturnAndRefundPolicy = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Return and Refund Policy - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Return and Refund Policy</h1>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Introduction</h2>
                    <p className='text-lg'>
                        At ietianswear.com, we strive to ensure that our customers are satisfied with their purchases. If you are not entirely satisfied with your purchase, we’re here to help.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Returns</h2>
                    <p className='text-lg'>
                        You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging and you need to have the receipt or proof of purchase.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Refunds</h2>
                    <p className='text-lg'>
                        Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Shipping</h2>
                    <p className='text-lg'>
                        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <p className='text-lg'>
                        If you have any questions on how to return your item to us, contact us at <a href='mailto:ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ReturnAndRefundPolicy;
