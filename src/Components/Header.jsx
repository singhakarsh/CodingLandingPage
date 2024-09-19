import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center mb-12'>
        <div className='mr-1'>
            <img src="./assets/logo.png" alt="logo" className='object-contain h-20 w-20'/>
        </div>
        <div>
            <h1 className='text-xl font-bold font-lato'>DSA Revision</h1>
        </div>
    </div>
  )
}

export default Header