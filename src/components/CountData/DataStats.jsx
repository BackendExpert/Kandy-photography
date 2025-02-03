import React from 'react'
import { countData } from './CountData'
import CountUp from 'react-countup'

const DataStats = () => {
  return (
    <div className='xl:px-24 px-4 my-8'>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4">
        {
            countData.map((data, index) => {
                return(
                    <div 
                        style={{ backgroundImage: `url(${data.bgImg})` }}
                        className="relative bg-cover bg-center px-8 py-16 text-white rounded-lg shadow-xl xl:my-0 my-4"
                        key={index}
                    >
                        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

                        <div className="relative flex justify-between">
                            <data.icon className='h-16 w-auto' />
                            <div className="">
                                <h1 className="text-xl uppercase font-semibold">{data.name}</h1>
                                <p className="text-xl font-semibold mt-2"><CountUp end={data.value} duration={5}/> + </p>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }
        </div>

    </div>
  )
}

export default DataStats