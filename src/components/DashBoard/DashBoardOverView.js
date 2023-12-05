import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'

const DashBoardOverView = () => {
    return (
        <div className='flex items-center justify-between h-[70px] shadow-lg  px-[25px]'>
            <div className='flex items-center rounded-[5px]'>
                <input type="text" className='bg-[#FAFAFA] h-[48px] outline-none pl-[11px] w-[350px] rounded-[5px] placeholder:text-14px] leading-[20px] font-normal' placeholder='Search for...' />
                <div className='bg-blue-400 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-hr-[5px]'>
                    <FaSearch color='white' />
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                    <FaRegBell />
                    <FaEnvelope />
                </div>
                <div className='flex items-center gap-[15px] relative'>
                    <p>Douglas Mco</p>
                    <div className='h-[50px] w-[50px] rounded-full bg-blue-400 cursor-pointer flex items-center justify-center relative'>
                        <img src='' alt='' />

                    </div>
             </div>
            </div>
        </div>
    )
}

export default DashBoardOverView