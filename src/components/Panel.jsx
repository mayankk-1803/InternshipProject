import React from 'react'

const Panel = () => {
  return (
    <div className="hidden sm:flex bg-gray-100  flex-wrap items-center justify-center gap-15 h-10 shadow-sm text-sm">
        <a href="#" className='text-lg'>1</a>
        <a href="#" className='text-lg'>2</a>
        <a href="#" className='text-lg bg-blue-400 w-10 h-full text-white flex items-center justify-center '>3</a>
        <a href="#" className='text-lg'>4</a>
        <a href="#" className='text-lg'>5</a>
      </div>
  )
}

export default Panel