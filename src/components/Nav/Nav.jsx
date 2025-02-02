import React from 'react'
import { useLocation } from 'react-router';

const Nav = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';
  return (
    <div className={`${ isHomeRoute ? 'bg-transparent' : 'bg-gray-900' } py-6 md:mx-24 mx-8 text-white`}>
        <div className="flex justify-between">
            <div className="">
                hi all
            </div>
        </div>
    </div>
  )
}

export default Nav