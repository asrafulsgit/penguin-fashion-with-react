import React from 'react'
import {NavLink} from 'react-router-dom'
import brand_logo from '../assets/icons/logo.png'

const Nav = () => {
  return (
    <>
      <nav className='px-25 py-5 flex justify-between items-center '>
          <div>
               <img src={brand_logo} className='w-65' alt="brand-logo" />
          </div>
          <div>
               <ul className=' flex gap-14 text-m roboto font-medium
                  text-[#3C3C3C]'>
                    <li><NavLink  to='/'>Home</NavLink> </li>
                    <li><NavLink  to='/product'>Product</NavLink> </li>
                    <li><NavLink  to='/about-us'>About Us</NavLink> </li>
                    <li><NavLink  to='/contact-us'>Contact Us</NavLink></li>
               </ul>
          </div>
      </nav>
    </>
  )
}

export default Nav
