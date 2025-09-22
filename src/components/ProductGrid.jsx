import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    tag: 'HOT',
    image: '/images/shoee1.avif',
    title: 'Nike Air Max 270',
    price: '299.43',
    oldPrice: '353.43',
    discount: '24%',
  },
  {
    tag: 'HOT',
    image: '/images/shoee1.avif',
    title: 'Nike Air Max 270 ',
    price: '299.43',
    oldPrice: '353.43',
    discount: '24%',
  },
  {
    tag: 'HOT',
    image: '/images/shoee1.avif',
    title: 'Nike Air Max 270 ',
    price: '299.43',
    oldPrice: '353.43',
    discount: '24%',
  },
  {
    tag: 'HOT',
    image: '/images/shoee1.avif',
    title: 'Nike Air Max 270 ',
    price: '299.43',
    oldPrice: '353.43',
    discount: '24%',
  },
  {
    tag: 'HOT',
    image: '/images/shoee1.avif',
    title: 'Nike Air Max 270 ',
    price: '299.43',
    oldPrice: '353.43',
    discount: '24%',
  },
  {
    tag: 'HOT',
    image: '/images/shoee1.avif',
    title: 'Nike Air Max 270 ',
    price: '299.43',
    oldPrice: '353.43',
    discount: '24%',
  },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto ">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      
    </div>
  );
};

export default ProductGrid;
