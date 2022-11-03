import React from 'react'
import Menu from './Menu'

export default function LeftMenu() {
  return (
    <div className=' bg-gray-200  '>
        <div className='py-4 px-8'>
            <div className='flex justify-center items-center py-6 border-b border-gray-300 mx-4'>My & Family assessment</div>
            <Menu/>
        </div>
    </div>
  )
}
