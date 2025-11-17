import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Whether you're looking for trendy streetwear or timeless wardrobe essentials, Narnia Clothings ensures a seamless shopping experience with easy navigation, fast shipping, and customer-friendly policies. Embracing both modern aesthetics and comfort, we strive to empower individuals to express their unique style while making online shopping effortless and enjoyable.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/collection'><li>Collection</li></Link>
                <Link to='/about'><li>About us</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 99906 XXXXX</li>
                <li><a href="mailto:contact@narniaclothings.store">info@narniaclothings.store</a></li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()} @ NarniaClothings.store | All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
