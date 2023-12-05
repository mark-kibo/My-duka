import React from 'react'
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa'
import AreaChart from './charts/AreaChart'
import PieChartPlot from './charts/PieChart'

const Main = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#fafafa]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>DashBoard</h1>
            <button className='bg-blue-400 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate report</button>
        </div>

        <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
                    <div>
                        <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Earnings (Monthly)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-gray-300 mt-5'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
            </div>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
                    <div>
                        <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Earnings (Monthly)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-gray-300 mt-5'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
            </div>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
                    <div>
                        <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Earnings (Monthly)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-gray-300 mt-5'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
            </div>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
                    <div>
                        <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Earnings (Monthly)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-gray-300 mt-5'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color=''/>
            </div>
        </div>

        {/* charts */}
        <div className='flex mt-[22px] w-full gap-[30px]'>
            <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]' >
                    <h2>Earnings overiew</h2>
                    <FaEllipsisV color='gray' className='cursor-pointer'/>

                </div>
                <AreaChart/>
            </div>

            <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                    <h2>Revenue Resource</h2>
                    <FaEllipsisV color='gray' className='cursor-pointer'/>
                </div>

                <div className='pl-[35px]'>
                    <PieChartPlot />
                </div>
            </div>

            <div className='mt-[22px] w-full gap-[30px]'>
                    <div></div>
                    <div></div>
            </div>

        </div>

    </div>
  )
}

export default Main