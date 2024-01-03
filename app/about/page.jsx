import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            
            <div>
                <p className='text-xl font-bold text-sky-300'>About Agency</p><br/>
                <p className='text-6xl font-bold tex-white'>We <span className='text-red-700'>create</span> digital ideas <br/>That are bigger , bolder , <br/>Braver and better.</p>
                <br/>

                <p className='text-sm text-balance'>we create digital ideas that are bigger ,bolder,brave and better.We belive in good ideas flexibility and precission We're world's Our Special team best consulting & finance solution provider.Wide range of web and software development services.</p>

                <div>

            <div className='absolute transform -translate-y-1/2 right-[60px] top-[330px]'>
                <Image src="/about.png" width={400} height={300} />
            </div>
                    <br/> 
    <div className="relative flex flex-row justify-between top-[90px]">
        <div className="mb-2">
            <p className="text-3xl font-bold text-sky-800">
                10 K+
            </p>
            <p className="text-sm text-sky-300">
                Year Of Experience
            </p>
        </div>
        
        <div className="mb-2">
            <p className="text-3xl font-bold text-sky-800">
                234 K+
            </p>
            <p className="text-sm text-sky-300">
                People Reached
            </p>
        </div>
        
        <div className="mb-2">
            <p className="text-3xl font-bold text-sky-800">
                5 K+
            </p>
            <p className="text-sm text-sky-300">
                Service And Plugins
            </p>
        </div>
    </div>
</div>

                    </div>
            </div>

    )
}

export default AboutPage