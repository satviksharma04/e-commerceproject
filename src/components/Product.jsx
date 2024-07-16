import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
      <div className="p-4 border rounded-md shadow-md">
        <img src={product.image} alt={product.name} className='w-full h-40 object-cover rounded-md' />
        <h3 >{product.name}</h3>
      </div>
    </div>
  )
}

export default Product
