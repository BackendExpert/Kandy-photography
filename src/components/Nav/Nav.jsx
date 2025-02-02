import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router';
import { navmenu } from './NavManus';
import { FaCameraRetro } from "react-icons/fa6";

const Nav = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
 <div className={`w-full py-6 transition-all duration-300 ${isScrolled ? 'bg-white text-gray-500 shadow-md' : 'bg-transparent text-white'}`}>
        <div className="lg:mx-24 mx-8 flex justify-between">
            <div className="">
                <h1 className="text-xl font-semibold flex">
                    <FaCameraRetro className='h-8 w-auto'/>
                    <p className="pl-2">KandyPhoto  E-magazine</p>
                </h1>
            </div>
            <div className="">
                <div className="xl:block hidden">
                    <div className="flex">
                        {
                            navmenu.map((nav, index) => {
                                return (
                                    <div className="mx-4 mt-1" key={index}>
                                        {
                                            nav.submenu.length === 0 ?
                                                (
                                                    <Link to={nav.link}>
                                                        <h1 className="font-semibold uppercase">{nav.name}</h1>
                                                    </Link>
                                                )
                                            :
                                                (
                                                    <h1 className="font-semibold uppercase cursor-pointer">{nav.name}</h1>
                                                )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav