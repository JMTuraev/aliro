import Link from 'next/link'
import React from 'react'

function Header() {
  const navigation=[
    {id:1, name:'My input', href:'#', current:true},
    {id:2, name:'assessment', href:'#', current:false},
  ]
  return (
    <div className='flex  items-center  bg-gray-200 h-16'>
      <div className='flex-1 text-left ml-8 text-xl font-bold  tracking-widest text-gray-600'>Aliro</div>
      <div className='flex-1 flex justify-center space-x-4 uppercase h-full font-bold text-gray-600'>
        {navigation.map((item, idx)=>(
          <div key={idx} className={`${item.current && 'border-b border-gray-600 '} pt-5 `}>{item.name}</div>
        ))}
      </div>
      <div className='flex-1 flex justify-end capitalize text-sm  mr-8 space-x-4 font-medium h-full  text-gray-600'>
        <Link href={'#'}><div className='pt-5 '>back home</div></Link>
        <Link href={'#'}><div className='pt-5'>sign out</div></Link>
      </div>
    </div>
  )
}

export default Header