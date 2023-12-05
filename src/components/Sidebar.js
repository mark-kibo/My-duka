import React from 'react'
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaRegSun, FaChevronRight, FaChevronLeft } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className='bg-blue-600 h-screen px-[25px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.1]'>
            <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>MyDuka panel</h1>
        </div>

        <div className='flex items-center gap-1 py-[20px] border-h-[1px] border-[#EDEDED]/[0.1]'>
                <FaTachometerAlt color='white'/>
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
        </div>

        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.1]'>
            <p className='text-[14px] font-extrabold leading-[14px] text-white/[0.4]'>Ecommerce</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <Link to="/stores" className='flex items-center gap-[10px]'>
                        <FaRegSun color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Stores</p>
                    </Link>
                </div>
                <FaChevronRight/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Products</p>
                </div>
                <FaChevronRight/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Suppliers</p>
                </div>
                <FaChevronRight/>
            </div>
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.1]'>
            <p className='text-[14px] font-extrabold leading-[14px] text-white/[0.4]'>interface</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Stores</p>
                </div>
                <FaChevronRight/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Products</p>
                </div>
                <FaChevronRight/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Suppliers</p>
                </div>
                <FaChevronRight/>
            </div>
        </div>


        <div>
            <div className=' flex justify-center items-center pt-[15px]'>
                <div className='h-[40px] bg-blue-400 rounded-full flex items-center justify-center cursor-pointer'>
                    <FaChevronLeft color='white'/>
                </div>
            </div>
        </div>

       


        
    </div>
  )
}

export default Sidebar