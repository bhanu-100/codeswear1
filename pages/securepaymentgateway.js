import React from 'react';
import Head from 'next/head';

const SecurePaymentGateway = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Secure Payment Gateway - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Secure Payment Gateway</h1>
                
                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Why Choose Razorpay?</h2>
                    <p className='text-lg mb-4'>
                        At ietianswear.com, we prioritize your security and convenience. That’s why we have partnered with Razorpay, a leading payment gateway in India, to ensure that your transactions are fast, secure, and seamless.
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Instant and secure payments</li>
                        <li>Supports multiple payment methods including credit/debit cards, net banking, UPI, and wallets</li>
                        <li>Easy integration with our website for a smooth checkout experience</li>
                        <li>24/7 customer support for any payment-related issues</li>
                    </ul>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>How to Make a Payment</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>Add your desired items to the cart and proceed to checkout.</li>
                        <li>Choose Razorpay as your preferred payment method.</li>
                        <li>Enter your payment details and complete the transaction.</li>
                        <li>Receive an instant confirmation and enjoy your purchase!</li>
                    </ol>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Your Security, Our Priority</h2>
                    <p className='text-lg'>
                        We understand the importance of security when it comes to online transactions. Razorpay uses advanced encryption and secure servers to protect your information. Shop with confidence knowing that your data is safe with us.
                    </p>
                </section>

                <section className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Need Help?</h2>
                    <p className='text-lg'>
                        If you have any questions or need assistance with your payment, feel free to contact our support team at <a href='mailto:support@ietianswear.com' className='text-blue-500'>support@ietianswear.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default SecurePaymentGateway;
