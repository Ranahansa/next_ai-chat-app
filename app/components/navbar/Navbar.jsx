import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-10 px-4 border-solid rounded-md border-1 bg-sky-900 border-sky-500">
            <Link href='/' className="text-2xl font-extrabold text-white">Logo</Link>
            <Links />
        </div>
    )
}

export default Navbar