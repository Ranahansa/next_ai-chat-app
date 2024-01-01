import Link from 'next/link'
import React from 'react'

const NotFount = () => {
    return (
    <div>
        <h1 className='text-3xl font-bold text-red-600'>this is not NotFount</h1>
        <p>Sorry! The page you are looking for does not exist</p>
        <Link href='/'>go to home</Link>
    </div>
    )
}

export default NotFount