import React from 'react';
import Head from 'next/head';

const TermsAndConditions = () => {
    return (
        <div className='md:mt-10 mt-40 min-h-screen p-6 bg-pink-100'>
            <Head>
                <title>Terms and Conditions - ietianswear.com</title>
            </Head>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8'>Terms and Conditions</h1>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Introduction</h2>
                    <p className='text-lg'>
                        Welcome to ietianswear.com. These terms and conditions outline the rules and regulations for the use of our website.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Acceptance of Terms</h2>
                    <p className='text-lg'>
                        By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use ietianswear.com if you do not accept all of the terms and conditions stated on this page.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Intellectual Property Rights</h2>
                    <p className='text-lg'>
                        Unless otherwise stated, ietianswear.com and/or its licensors own the intellectual property rights for all material on ietianswear.com. All intellectual property rights are reserved. You may view and/or print pages from ietianswear.com for your own personal use subject to restrictions set in these terms and conditions.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Restrictions</h2>
                    <p className='text-lg'>
                        You are specifically restricted from all of the following:
                    </p>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Publishing any website material in any other media without prior consent.</li>
                        <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
                        <li>Using this website in any way that is or may be damaging to this website.</li>
                        <li>Using this website in any way that impacts user access to this website.</li>
                        <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</li>
                        <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
                    </ul>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Limitation of Liability</h2>
                    <p className='text-lg'>
                        In no event shall ietianswear.com, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. ietianswear.com, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Variation of Terms</h2>
                    <p className='text-lg'>
                        ietianswear.com is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
                    </p>
                </section>

                <section className='text-center'>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <p className='text-lg'>
                        If you have any questions about these Terms, please contact us at <a href='mailto:ajio86915@gmail.com' className='text-blue-500'>support@ietianswear.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default TermsAndConditions;
