import React from 'react'
import HeroSection from './HeroSection'
import DataStats from '../../components/CountData/DataStats'

const HomePage = () => {
  return (
    <div className=''>
        <HeroSection />
        <div className="">
          <DataStats />
        </div>

    </div>
  )
}

export default HomePage