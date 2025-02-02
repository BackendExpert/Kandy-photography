import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

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
        <div className="md:mx-24 mx-8 flex justify-between">
            <div className="">
                <h1 className="text-xl font-semibold">
                    KandyPhoto  E-magazine
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Nav