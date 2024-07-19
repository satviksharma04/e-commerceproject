import React from 'react'
import logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className='bg-gray-500 text-white p-2 bottom-0 right-0 left-0'>
      <div className='flex md:justify-between items-center'>
        <div className='w-32 hidden md:block'>
          <img src={logo} alt="" />
        </div>
        <div className="text-center justify-center flex m-2 text-white">
          &copy; {new Date().getFullYear()} SwagAura. All rights reserved.
        </div>
        <div className='gap-2  hidden md:flex'>
          <SocialIcon as='div' className='transform transition duration-200 hover:scale-110' bgColor='black' fgColor='white' url="https://x.com/sharma_satvik_" />
          <SocialIcon as='div' className='transform transition duration-200 hover:scale-110' bgColor='black' fgColor='white' url="https://www.instagram.com/_satvik.sharma/" />
          <SocialIcon as='div' className='transform transition duration-200 hover:scale-110' bgColor='black' fgColor='white' url="https://www.linkedin.com/in/satviksharma04/" />
          <SocialIcon as='div' className='transform transition duration-200 hover:scale-110' bgColor='black' fgColor='white' url="https://www.github.com/satviksharma04/" />
        </div>
      </div>    
    </footer>
  )
}

export default Footer
