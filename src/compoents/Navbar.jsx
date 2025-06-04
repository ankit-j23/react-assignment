import React from 'react'
import applogo from '../assets/logo_internshala.jpg'
import {AlignJustify} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-6 sm:px-12 lg:px-30 shadow-sm'>
        <div className='flex items-center gap-2'><AlignJustify className='w-full sm:hidden'/><img className='w-24 lg:w-28 -mt-3' src={applogo} alt="" /></div>
        <div className='flex sm:gap-5 lg:gap-12 sm:text-base lg:text-md text-black/70 font-semibold'>
          <a className='max-sm:hidden' href="#">Internships</a>
          <a className='max-sm:hidden' href="#">Courses</a>
          <a className='max-sm:hidden' href="#">Jobs</a>
          <a  href="#"><span className='max-sm:hidden'>Login/</span>Register</a>
        </div>
    </div>
  )
}

export default Navbar
