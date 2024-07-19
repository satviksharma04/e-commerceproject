import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ section, category, product }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <Link to={`/product/${section}/${category}/${product.id}`} >
        <img src={product.image} alt={product.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-105 md:hover:scale-110' />
        <div>
          <h3 className='text-lg font-semibold mt-3'>{product.name}</h3>
          <p className='text-gray-700'>{product.desc}</p>
          <h4 className='font-semibold '>&#8377; {product.price}</h4>
        </div>
        <div className='flex text-yellow-600 text-4xl'>&#9733; &#9733; &#9733; &#9733; &#9734;</div>
      </Link>
    </div>
  )
}

export default ProductCard
  