import React from 'react'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-20'>
      <div className='min-h-screen md:flex bg-gradient-to-r from-rose-200 via-red-200 to-rose-300 mx-2 rounded-md mb-2'>
        <div className='justify-center pt-8 mx-6 md:m-16 md:items-center md:w-2/3'>
          <h1 className='head  text-3xl md:text-4xl font-bold md:font-extrabold uppercase '>
            <span className='text-red-600'>Elevate </span>
            <span className='text-red-600'>Your </span>
            <span className='text-red-600'>Wardrobe: </span>
            <br />
            <span className='text-red-800'>Explore </span>
            <span className='text-red-800'>Our </span>
            <span className='text-red-800'>Curated </span>
            <span className='text-red-800'>Collections!</span>
          </h1>
          <br />
          <p className='text-lg text-wrap font-semibold bg-clip-text text-transparent bg-gradient-to-br from-rose-500 via-red-700 to-red-900'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque optio mollitia quod libero aperiam minima molestiae excepturi quos odio nulla iure quidem incidunt quas consequatur dolorum necessitatibus, odit quibusdam. Quis ullam consectetur perspiciatis necessitatibus neque eos qui quae laudantium!
          </p>
          <div className='flex justify-between items-center mt-5 mb-4 md:pr-5'>
            <Link to="/women" className='bg-red-50  flex items-center text-lg font-semibold border-solid rounded-md gap-2 px-3 py-1.5 border-red-600'>Her <img className='w-4' src={arrow} alt="" /></Link>
            <Link to="/men" className='bg-red-50  flex items-center text-lg font-semibold border-solid rounded-md gap-2 px-3 py-1.5 border-red-600'>Him <img className='w-4' src={arrow} alt="" /></Link>
          </div>
        </div>
        <div className='md:w-1/2 items-center bottom-0'>
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
