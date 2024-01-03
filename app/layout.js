import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import React from 'react'; // Add the missing import statement for React

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-[#0D0C22]">
        <div className='flex flex-col justify-between min-h-screen md:mx-auto md:container sm:mx-auto sm:container ring-0 focus:outline-none'>
        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
