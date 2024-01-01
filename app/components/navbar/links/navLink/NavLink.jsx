"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ item }) => {
    
    const pathName = usePathname()
    return (
        <div>
            <Link href={item.path} className= {`text-lg ${pathName === item.path ? 'text-red-500' : ''}`}>
                {item.title}
            </Link>
        </div>
    )
}

export default  NavLink