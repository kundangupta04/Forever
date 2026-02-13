import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className="">
          <Link to="/"><img src={assets.logo} className='mb-5 w-32' alt="" /></Link>
          <p className='w-full md:w-2/3 text-gray-600'>At Forever, we bring you quality fashion designed for comfort, confidence, and everyday style. From timeless essentials to trending pieces, we are committed to delivering value, reliability, and a seamless shopping experience.</p>
        </div>

        <div className="">
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About us</li></NavLink>
            <NavLink to='/cart'><li>Delivery</li></NavLink>
            <NavLink to="/about"><li>Privacy policy</li></NavLink>
          </ul>
        </div>

        <div className="">
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-235-987-7563</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr className='text-gray-300' />
        <p className='py-5 text-sm text-center'>Copyright 2025 © forever.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
