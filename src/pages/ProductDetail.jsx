import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const { section, category, productId } = useParams();

  const categoryData = data[section].find((cat) => cat.name.toLowerCase() === category.toLowerCase());
  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const product = categoryData.products.find((p) => p.id === parseInt(productId));
  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      setSize(product.sizes[0]);
    }
  }, [product]);
  

  const handleAddToCart = () => {
    addToCart({ ...product, size, quantity });
  };

  return (
    <div className="mt-20 mb-10 mx-5 md:mx-36 md:my-32 bg-gray-300 shadow-lg rounded-md min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 w-full max-w-6xl">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-1/5">
            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-md md:h-full md:object-contain" />
            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-md md:h-full md:object-contain" />
            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-md md:h-full md:object-contain" />
            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-md md:h-full md:object-contain" />
          </div>
          <div className="w-4/5 flex items-center">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.desc}</p>
          <div className="flex text-yellow-600 text-2xl mb-4">
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </div>
          <h3 className="text-red-600 font-bold text-xl mb-6">&#8377;{product.price}</h3>
          <div className="mb-5">
            <h2 className="font-semibold text-lg mb-2">Select Size</h2>
            <select className="flex gap-3" name="size" id='size' value={size} onChange={(e) => setSize(e.target.value)}>
                {product.sizes.map((sizeOption) => (
                  <option key={sizeOption} className="border w-10 h-10 flex items-center justify-center bg-gray-400 text-center rounded-md" value={sizeOption}>
                    {sizeOption}
                  </option>
                ))}
              </select>
          </div>
          <div className='flex mb-6'>
            <button onClick={() => setQuantity((quantity) => (quantity === 1 ? 1 : quantity - 1))} className='border border-gray-800 bg-gray-100 w-8 font-bold text-2xl' >-</button>
            <div className='w-12 text-2xl text-center '>{quantity}</div>
            <button onClick={() => setQuantity((quantity) => quantity + 1)} className='border border-gray-800 bg-gray-100 w-8 font-bold text-2xl'>+</button>
          </div>
          <button onClick={handleAddToCart} className="bg-red-600 text-white px-6 py-2 rounded-md w-full md:w-auto">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
