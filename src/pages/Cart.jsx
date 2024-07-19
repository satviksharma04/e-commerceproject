import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateCartItem, clearCart } = useContext(CartContext);

    const handleQuantityChange = (productId, size, quantity) => {
        if (quantity > 0) {
            updateCartItem(productId, size, { quantity });
        }
    };

    return (
        <div className='min-h-screen mx-auto p-4 mt-16 bg-gray-300 shadow-lg rounded-md'>
            <h2 className='text-3xl font-semibold text-center'>Shopping Cart</h2>
            {cart.length === 0 ? (
                <div className='flex items-center justify-center'>
                    <div className="text-center w-64 bg-gray-200 flex-col justify-center font-semibold text-lg mt-32 rounded-md shadow-lg">
                        <div className='text-red-500 text-xl mt-2'>Your cart is empty.</div>
                        <div className='mb-4'>😇😇</div>
                        <button className='p-2 bg-blue-500 mb-2 text-white rounded-md'>
                            <Link to="/">Back To HomePage</Link>
                        </button>
                    </div>
                </div>
            ) : (
                <div className='grid gap-6 mt-6'>
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.size}`} className='bg-white p-4 rounded-md shadow-md flex justify-between items-center'>
                            <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="ml-4">
                                    <h2 className="font-bold text-xl">{item.name}</h2>
                                    <p className="text-sm">Size: {item.size}</p>
                                    <p className="text-sm">Price: &#8377;{item.price}</p>
                                    <p className="text-sm">Total: &#8377;{item.price * item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => removeFromCart(item.id, item.size)} className="text-red-600 font-bold">Remove</button>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                                        className="border border-gray-800 bg-gray-100 w-8 font-bold text-2xl"
                                    >-</button>
                                    <div className="w-12 text-2xl text-center">{item.quantity}</div>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                                        className="border border-gray-800 bg-gray-100 w-8 font-bold text-2xl"
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between'>
                        <button
                            onClick={clearCart}
                            className="mt-6 bg-red-700 text-white px-6 py-3 rounded-lg"
                        >
                            Clear Cart
                        </button>
                        <button className='px-4 bg-blue-500 text-white rounded-lg'>
                            <Link to="/">Back To HomePage</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
