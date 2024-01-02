"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ item }) => {
    
    const pathName = usePathname()
    return (
        <div>
            <Link href={item.path} className= {` ${pathName === item.path ? 'text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2'  : ''}`}>
                {item.title}
            </Link>
        </div>
    )
}

export default  NavLink