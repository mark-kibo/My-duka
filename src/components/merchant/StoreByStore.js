import React from 'react'
import AreaChart from '../charts/AreaChart'
import BarChart from '../charts/BarChart'

const StoreByStore = () => {
  return (
    <div className='flex flex-col gap-4 px-2 my-2 h-full' >
        <div>
            <h2 className='bg-[] leading-2 capitalize font-bold py-2 text-2xl'>Store  by store report</h2>
        </div>

        
        {/* store reports two charts */}

        <div className='md:grid md:grid-cols-2 gap-4'>
            <AreaChart/>
            <BarChart/>
        </div>
    </div>
  )
}

export default StoreByStore