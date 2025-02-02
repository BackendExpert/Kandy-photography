import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative h-[90vh] w-auto bg-[url(https://wallpapercave.com/wp/wp4991568.jpg)] bg-cover bg-center'>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative xl:py-[10%] py-[20%] z-20 xl:ml-20 text-white">
            <h1 className="xl:text-4xl text-2xl">KandyPhoto E-magazine</h1>
        </div>        
    </div>
  )
}

export default HeroSection