import React from 'react'
import NoBgWhitebtn from '../../components/Button/NoBgWhitebtn'
import { Link } from 'react-router'

const HeroSection = () => {
  return (
    <div className='relative h-[80vh] w-auto bg-[url(https://wallpapercave.com/wp/wp4991568.jpg)] bg-cover bg-center'>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative xl:py-[10%] py-[20%] z-20 xl:mx-20 mx-8 text-white text-center xl:text-left pt-[50%]">
            <h1 className="xl:text-4xl text-2xl md:text-xl font-semibold">KandyPhoto E-magazine</h1>
            <div className="mt-4">
                <h1 className="text-2xl text-xl">Welcome to Our monthly E-magazine</h1>
                <p className="xl:w-1/2 mt-4 hidden xl:block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur facilis quae illum accusamus similique hic maxime sed provident ipsam earum, obcaecati, atque recusandae mollitia aut, doloribus expedita quisquam ipsum. Expedita.
                </p>

                <div className="my-4">
                    <Link to={'#'}>
                        <NoBgWhitebtn 
                            type={'button'}
                            btnvalue={'Read More'}
                        />
                    </Link>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default HeroSection