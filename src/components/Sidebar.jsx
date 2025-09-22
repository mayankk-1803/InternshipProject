import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-80 bg-white p-4 space-y-6">
      
      <div className="bg-gray-100 rounded-lg  p-4">
        <h3 className="text-xl font-semibold mb-3">Hot Deals</h3>
        <ul className="space-y-1 text-sm">
          <li className="flex justify-between hover:text-blue-500 mb-6">
            <span>Nike</span><span>2</span>
          </li>
          <li className="flex justify-between text-blue-500 mb-10">
            <span>Airmax</span><span>48</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Nike</span><span>14</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Adidas</span><span>15</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Vans</span><span>23</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>All Stars</span><span>1</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Adidas</span><span>95</span>
          </li>
        </ul>
      </div>

      
      <div className="bg-gray-100  rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-3">PRICES</h3>
        <label className="text-xs block mb-2">
          Range: <span className="font-medium">$13.99 - $25.99</span>
        </label>
        <input type="range" min="13.99" max="25.99" defaultValue="25.99" className="w-full accent-blue-500" />
      </div>

      
      <div className="bg-gray-100  rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-3">COLOR</h3>
        <div className="flex gap-2 flex-wrap">
          {[
            'bg-blue-500',
            'bg-red-500',
            'bg-black',
            'bg-yellow-400',
            'bg-pink-400',
            'bg-gray-200'
          ].map((c, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full  ${c}`}
            />
          ))}
        </div>
      </div>

      
      <div className="bg-gray-100  rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-3">BRAND</h3>
        <ul className="space-y-1 text-sm">
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Nike</span><span>99</span>
          </li>
          <li className="flex justify-between text-blue-500 mb-10">
            <span>Nike</span><span>99</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Adidas</span><span>99</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 mb-10">
            <span>Skemers</span><span>99</span>
          </li>
        </ul>
      </div>

     
      <button className="w-full  rounded-lg py-2 text-xl bg-gray-100">
        MORE
      </button>
    </div>
  );
}

export default Sidebar;
