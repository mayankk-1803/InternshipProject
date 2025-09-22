import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white shadow p-4 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>E-comm</h1>
        <div className='space-x-20 flex justify-items-start'>
            <a href="#" className='text-blue-500 font-semibold text-2xl'>Home</a>
            <a href="#" className='text-gray-600 font-semibold text-2xl'>Bag</a>
            <a href="#" className='text-gray-600 font-semibold text-2xl'>Sneakers</a>
            <a href="#" className='text-gray-600 font-semibold text-2xl'>Belt</a>
            <a href="#" className='text-gray-600 font-semibold text-2xl'>Contact</a>
        </div>
        <div className='flex items-center space-x-5'>
            <ShoppingCart />
            <p>Items</p><p className='text-gray-500'>$0.00</p>
        </div>
    </nav>
  )
}

export default Navbar