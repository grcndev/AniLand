import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center mx-auto py-2 h-75 w-full bg-graynav relative text-sm text-txnav' style={{height: '75px'}}>
        <div><Image alt='logo' width={50} height={50} src={logo}/></div>
        <div className='flex justify-between items-center gap-24' >
        <div className='flex items-center gap-4' >
        <span className='hover:text-hovnav'>Search</span>
        <span className='hover:text-hovnav'>Social</span>
        <span className='hover:text-hovnav'>Forum</span>
        </div>
        <div className='flex items-center gap-4'>
        <span className='hover:text-hovnav'>Login</span>
        <span className='px-4 py-2 bg-sgbg hover:bg-blue-50 active:bg-blue-50 rounded-md text-sgtxcol hover:bg-sgbg-50 cursor-pointer'>Sign Up</span>
        </div>
        </div>
    </div>
  )
}

export default Navbar