import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navmenu } from './NavManus';
import { FaCameraRetro } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";


const Nav = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuopen, setmenuopen] = useState(false)


    const openmenu = () => {
        setmenuopen(!menuopen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full py-6 transition-all duration-300 ${isScrolled ? 'bg-white text-gray-500 shadow-md' : 'bg-transparent text-white'}`}>
            <div className="xl:mx-24 mx-8 flex justify-between items-center">
                {/* Logo Section */}
                <h1 className="text-xl font-semibold flex items-center">
                    <FaCameraRetro className="h-8 w-auto" />
                    <p className="pl-2">KandyPhoto E-magazine</p>
                </h1>

                {/* Navigation Menu */}
                <div className="hidden xl:block">
                    <div className="flex space-x-6">
                        {navmenu.map((nav, index) => (
                            <div 
                                key={index} 
                                className="relative group" 
                            >
                                {nav.submenu.length === 0 ? (
                                    <Link to={nav.link} className="font-semibold uppercase">
                                        {nav.name}
                                    </Link>
                                ) : (
                                    <h1 className="flex font-semibold uppercase cursor-pointer">
                                        <p className="pr-2">{nav.name}</p>
                                        <FaAngleDown className='h-6 w-auto'/>
                                    </h1>
                                )}

                                {nav.submenu.length > 0 && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {nav.submenu.map((sub, subIndex) => (
                                            <Link 
                                                key={subIndex} 
                                                to={sub.link} 
                                                className="block px-4 py-2 hover:bg-gray-200"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="xl:hidden block">
                    {
                        !menuopen ? (
                            <TiThMenu className='h-6 w-auto' onClick={openmenu}/>
                        ):(
                            <MdOutlineClose className='h-6 w-auto' onClick={openmenu}/>
                        )
                    }


                    <div className={`${!menuopen ? 'hidden' : 'block'} absolute bg-white text-gray-500 py-4 pl-8 pr-16 right-8 top-20 rounded-md` }>
                        {
                            navmenu.map((nav, index) => {
                                return (
                                    <div className="py-4" key={index}>
                                        {
                                            nav.submenu.length === 0 ? (
                                                <Link to={nav.link}>
                                                    <h1 className="uppercase duration-500 hover:underline">{nav.name}</h1>
                                                </Link>
                                            ):(
                                                <div className="">
                                                    <h1 className="uppercase">{nav.name}</h1>

                                                    <div className="">
                                                        {
                                                            nav.submenu.map((menusub, submenuindex) => {
                                                                return (
                                                                    <div className="pl-4 py-2" key={submenuindex}>
                                                                        <Link to={menusub.Link}>
                                                                            <h1 className="">{menusub.name}</h1>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
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
    );
};

export default Nav;
