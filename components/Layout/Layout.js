import React from 'react'
import Header from './Header'
import LeftMenu from './LeftMenu'

function Layout({children}) {
    return (
        <div className=' grid grid-cols-12 space-y-6'>
                <div className='col-span-12 '>
                    <Header/>
                </div>
                <div className=' col-start-2 col-span-3 whitespace-nowrap'>
                    <LeftMenu/>
                </div>

            <main className='col-span-7'> {children}</main>
        </div>
    )
}

export default Layout