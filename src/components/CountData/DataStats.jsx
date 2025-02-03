import React from 'react'
import { countData } from './CountData'

const DataStats = () => {
  return (
    <div className='xl:px-24 px-4'>
        {
            countData.map((data, index) => {
                <div className="" key={index}>
                    
                </div>
            })
        }
    </div>
  )
}

export default DataStats