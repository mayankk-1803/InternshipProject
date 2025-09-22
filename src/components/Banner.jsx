import React from 'react';

const Banner = () => {
  return (
    <div className="space-y-4 mx-4 sm:mx-0">
      
      <div className="bg-blue-400 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 ">
        
        <div className="text-white space-y-3 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Adidas Men Running
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Sneakers</h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Performance and design. Taken right to the edge.
          </p>
          <a href="#" className="inline-block text-xs sm:text-sm lg:text-base font-semibold underline mt-2">
            SHOP NOW
          </a>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/shoe.png"
            alt="Shoe"
            className="w-48 sm:w-64 md:w-72 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
