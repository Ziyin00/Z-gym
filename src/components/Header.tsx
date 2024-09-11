'use client';

import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md';
const Header = () => {
 const [headerActive, setHeaderActive] = useState(false);
 const [openNav, setOpenNav] = useState (false);

 useEffect(() => {
  const handleScroll = () => {
    setHeaderActive(window.scrollY  > 50);
  }

  window.addEventListener('scroll', handleScroll);
 return () => {
  window.removeEventListener('scroll', handleScroll)
 }
  
}, [])



  return (
    <header 
    className={ `${headerActive ? 'h-[90px]' : 'h-[110px]'} fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[90px] transition-all z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href=''>
        <Image src={'/assets/img/Z-dampel_logo.jpg'}  width={97} height={35} alt='logo'
        className='rounded-full'/>
        </Link>
        <MobileNav containerStyles={`${headerActive ? 'top-[90px]' : 'top-[110px]'}
         ${
      openNav
      ? 'max-h-max pt-8 pb-10 border-t border-white/10' 
      : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'
    } 
     flex flex-col text-center gap-4 fixed bg-primary-200 w-full left-0 top-[110px] lg:hidden text-white text-base uppercase font-medium transition-all`}/>
        <Nav containerStyles='flex gap-4 hidden lg:flex text-white text-base uppercase font-medium '/>

        <div className='flex items-center gap-8'>
          <div className='text-white flex items-center gap-4'>
            <button className='hover:text-accent transition-all text-base uppercase font-medium'>Login</button>
            <button className='hover:text-accent transition-all text-base uppercase font-medium'>Register</button>
          </div>
        <button
        onClick={() => setOpenNav(!openNav)}
        className='text-white lg:hidden'>
          <MdMenu className='text-4xl'/>
        </button>
      </div>
      </div>
      
    </header>
  )
}

export default Header