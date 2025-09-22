import React from 'react'

const FilterPanel = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap items-center gap-15 p-4 shadow-sm text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium text-lg text-gray-500">13 Items</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-lg">Sort By</span>
          <select className="border border-gray-200 rounded px-2 py-1 text-gray-700">
            <option className=''>Name</option>
            <option>Price</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-lg">Show</span>
          <select className="border border-gray-200  rounded px-2 py-1 text-gray-700">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
        <div className="flex items-center ml-auto gap-2">
          
          <button className="p-2  rounded hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8   text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h4v4H4V6zM10 6h4v4h-4V6zM16 6h4v4h-4V6zM4 12h4v4H4v-4zM10 12h4v4h-4v-4zM16 12h4v4h-4v-4zM4 18h4v4H4v-4zM10 18h4v4h-4v-4zM16 18h4v4h-4v-4z" />
            </svg>
          </button>
          
          <button className="p-2  rounded hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8  text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
  )
}

export default FilterPanel