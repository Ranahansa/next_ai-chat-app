import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({img,topic,title}) => {
    return (
        <div className=''>
            
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-9 mt-8">
    <Link href="#">
        <Image class="rounded-t-lg bg-cover w-[400px] h-[200px]" src={img} width={400} height={200} alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic}</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
        <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-800 rounded-lg hover:bg-sky-900 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-900 dark:focus:ring-blue-800">
            Read more
        </Link>
    </div>
</div>
        </div>
    )
}

export default Card