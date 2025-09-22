import React from 'react'

const Banner = () => {
  return (
    <div className='space-y-4 '>
        <div className='bg-blue-400  flex flex-col md:flex-row items-center justify-between px-8 h-75'   >
            <div className='text-white space-y-2 md:w-1/2'>
                <h1 className='text-3xl font-bold leading-tight'>Adidas Men Running</h1>
                <h2 className='text-3xl font-bold'>Sneakers</h2>
                <p className='text-sm'>
                    Performance and design. Taken right to the edge.
                </p>
                <a href="#" className="inline-block text-xs font-semibold underline mt-2">
                    SHOP NOW
                </a>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/shoe.png"
            alt="Shoe"
            className="w-64 h-auto object-contain"
          />
        </div>
        </div>
    </div>
  )
}

export default Banner