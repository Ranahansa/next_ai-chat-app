import React from 'react'
import NavLink from './navLink/navLink'

const Links = () => {
    
    const links = [
        {
            title : 'Home',
            path : '/',
        },
        {
            title : 'About',
            path : '/about',
        },
        {
            title : 'Contact',
            path : '/contact',
        },
        {
            title : 'Blog',
            path : '/blog',
        }
    ]

    const session = true
    const isAdmin = true
    
    return (
        <div className='flex items-center gap-x-9 focus:outline-none focus:right-0 focus:border-none'>
            {
                links.map((link) => (
                    <NavLink className='focus:outline-none focus:ring-0 focus:border-none' item={link} key={link.title} />
                ))
            }{
                session ? (
                    <>
                    {
                    isAdmin && (
                        <NavLink item={{title : 'Admin', path : '/admin'}} />
                    )
                }
                <button className='p-1 border border-white rounded-lg text-md'>LogOut</button>
                </>
                ) : (
                    <NavLink item={{title : 'Login', path : '/login'}} />
                )
            }
        </div>
    )
}

export default Links
