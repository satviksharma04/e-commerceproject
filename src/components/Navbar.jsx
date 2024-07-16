import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/title-logo.png'
import cart_icon from '../assets/shopping-cart.png'
import menu_icon from '../assets/menu.png'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='p-3 flex justify-between items-center shadow-md'>
      <div className="logo w-36 md:ml-10">
        <img src={logo} alt="" />
      </div>
      <nav className='text-xl gap-5 font-bold hidden md:flex items-center justify-center list-none'>
        <NavLink to="/"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" >Home</NavLink>
        <NavLink to="/men"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline">Men</NavLink>
        <NavLink to="/women"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline">Women</NavLink>
        <NavLink to="/kids"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline">Kids</NavLink>
        <NavLink to="/contact"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" >Contact</NavLink>
      </nav>
      <div className='flex gap-6 items-center mx-4'>
        <div className="cart w-10 ">
          <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>
        </div>
        <div className="menu w-8 block md:hidden cursor-pointer" onClick={togglemenu}>
          <img src={menu_icon} alt="" />
        </div>
      </div>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-64 shadow-md bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button className='p-4 text-2xl'  onClick={togglemenu} >&times;</button>
        <nav className='flex flex-col items-center list-none gap-5 text-xl font-semibold mt-4'>
        <NavLink to="/"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" onClick={togglemenu}  >Home</NavLink>
        <NavLink to="/men"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" onClick={togglemenu} >Men</NavLink>
        <NavLink to="/women"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" onClick={togglemenu} >Women</NavLink>
        <NavLink to="/kids"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" onClick={togglemenu} >Kids</NavLink>
        <NavLink to="/contact"  className="px-4 cursor-pointer hover:text-yellow-400 hover:underline" onClick={togglemenu}  >Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
