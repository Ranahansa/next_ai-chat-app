import Image from 'next/image'
import React from 'react'

const ConatctPage = () => {
    return (
        <div>
            <div className='pt-5 text-4xl font-bold text-sky-300'>Contact Us</div>
            <div className='w-[800px]'>
            <div className='pt-8 text-base font-medium text-white whitespace-pre-line'>Welcome to our Contact Us page! We value your feedback, inquiries, and suggestions. Whether you have questions about our products or services, want to collaborate, or simply want to say hello, we are here to listen. Please feel free to reach out to us using the contact form below, and we will get back to you as soon as possible. Your input is important to us as we strive to provide the best experience for our users. Thank you for choosing us, and we look forward to connecting with you!</div>
            </div>

            <div className='flex justify-around gap-9'>
                <Image className='h-[450px] w-[450px] relative top-[90px]'  src="/contact.png" width={300} height={100} />
            
            <div className='flex items-center justify-center mb-[100px]'>
                <form className='w-[600px] p-4 border-2 rounded-lg border-sky-500'>
                    <div className='p-2 m-2'>
                        <input className='w-full p-2 bg-transparent border rounded-lg border-sky-500' placeholder='Enter Your Name' type='text' />
                    </div>
                    <div className='p-2 m-2'>
                        <input className='w-full p-2 bg-transparent border rounded-lg border-sky-500' placeholder='Enter Your Email' type='email' />
                    </div>
                    <div className='p-2 m-2'>
                        <textarea className='p-2 bg-transparent border rounded-lg border-sky-500' cols="30" rows="10" placeholder='Enter Your Message' />
                    </div>
                    <div className='p-2 m-2 '>
                        <button className='w-20 text-center bg-transparent border rounded-lg h-9 border-sky-500 hover:bg-sky-900'>Send</button>
                    </div>

                </form>
            </div>
            </div>
        </div>
    )
}

export default ConatctPage