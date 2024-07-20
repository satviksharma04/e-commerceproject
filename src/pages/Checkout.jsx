import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (

        <div className='min-h-screen p-4 mt-16 bg-gray-300 shadow-lg rounded-md'>
            <div className='flex items-center justify-center'>
                <div className="text-center w-96  bg-gray-200 flex-col justify-center font-semibold text-lg mt-32 rounded-md shadow-lg">
                    <div className='text-orange-500 text-xl font-semibold mt-2'>Thank You For Shopping With Us</div>
                    <div className='mb-4 '>🤩🤩</div>
                    <button className='p-2 bg-blue-500 mb-2 text-white rounded-md'>
                        <Link to="/">Back To HomePage</Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Checkout
