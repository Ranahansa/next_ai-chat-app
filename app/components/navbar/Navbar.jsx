import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-10 px-4 border-solid rounded-b-lg border-1 bg-sky-900 border-sky-500 focus:ring-0 focus:outline-none focus:border-none">
            <Link href='/' className="text-2xl font-extrabold text-white">Logo</Link>
            <Links className="focus:outline-none focus:ring-0 focus:border-none" />
        </div>
    )
}

export default Navbar