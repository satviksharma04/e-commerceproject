import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='mt-20 mx-auto px-8'>
      <div className="text-center mb-10">
        <h1 className='text-4xl font-bold mb-4'>About Us</h1>
        <p className='text-gray-700 text-lg'>Welcome to <span className='font-semibold'>SwagAura</span>, your number one source for all things fashion. We're dedicated to providing you the best of clothing, with a focus on dependability, customer service, and uniqueness.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center mb-12">
        <div className='w-full md:w-1/2 p-4 '>
          <img src={about} alt="about us" className='w-full rounded-lg shadow-md transform transition duration-300 hover:scale-105' />
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <p className='text-gray-700 text-lg mb-4 '>
            SwagAura has come a long way from its humble beginnings. Driven by a passion for creating unique and stylish clothing that everyone could afford, our journey began with a simple vision. Today, SwagAura is known for its dedication to providing high-quality fashion with exceptional customer service.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our commitment to excellence has been unwavering since day one. We believe in the power of fashion to transform lives, and we are dedicated to making a positive impact through our products and services. From the latest trends to timeless classics, our collections are designed to inspire and empower our customers.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            At SwagAura, we value sustainability and ethical practices. We are constantly seeking ways to reduce our environmental footprint and support fair labor practices. Our goal is to create a more sustainable future for the fashion industry, and we are committed to making responsible choices in every aspect of our business.
          </p>
          <p className="text-gray-700 text-lg mb-4">We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
          <p className="text-gray-700 text-lg">
            Sincerely, <br />
            Satvik Sharma, Founder
          </p>
        </div>
      </div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Our mission is to provide the best quality clothing at affordable prices, while ensuring exceptional customer service and a seamless online shopping experience.
        </p>
      </div>
    </div>
  )
}

export default About
