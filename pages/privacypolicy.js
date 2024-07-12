import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Privacy Policy - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Privacy Policy</h1>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Introduction</h2>
                    <p className='text-lg'>
                        Welcome to ietianswear.com. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Information We Collect</h2>
                    <p className='text-lg'>
                        We may collect, use, store, and transfer different kinds of personal data about you, including:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Identity Data: first name, last name, username.</li>
                        <li>Contact Data: billing address, delivery address, email address, telephone numbers.</li>
                        <li>Financial Data: bank account and payment card details.</li>
                        <li>Transaction Data: details about payments to and from you.</li>
                        <li>Technical Data: IP address, browser type and version, time zone setting.</li>
                    </ul>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>How We Use Your Information</h2>
                    <p className='text-lg'>
                        We use your personal data to:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Process your orders and manage your account.</li>
                        <li>Improve our website, products, and services.</li>
                        <li>Send you marketing communications if you have opted in.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </section>

                <section className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <p className='text-lg'>
                        If you have any questions about this privacy policy, please contact us at <a href='ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
