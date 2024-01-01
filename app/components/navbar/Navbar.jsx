import React from 'react'
import Links from './links/Links'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-10 px-4 bg-purple-800">
            <h1 className="text-2xl font-extrabold text-white">Logo</h1>
            <Links />
        </div>
    )
}

export default Navbar