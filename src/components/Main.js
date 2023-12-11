import React from 'react';
import { FaEllipsisV, FaStore, FaCartPlus, FaMoneyBill, FaTruck, FaUserPlus } from 'react-icons/fa';
import AreaChart from './charts/AreaChart';
import PieChartPlot from './charts/BarChart';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BarChart from './charts/BarChart';
import PieDonChart from './charts/PieChart';
import ColumnChart from './charts/ColumnChart';

const Main = ({ userRole }) => {

  const [showUserTable, setShowUserTable] = useState(false);
  const [showProductTable, setShowProductTable] = useState(false);

  const handlePaidNonPaidProductsClick = () => {
    setShowProductTable(true);
  };

  const renderAdminCards = () => {
    return (
      <div>
        <div className='flex items-center justify-between'>
          <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>DashBoard</h1>
          <button className='bg-blue-400 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate report</button>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-1 gap-[30px] mt-[25px] pb-[15px]'>
          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Total sales</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>$40000</h1>
            </div>
            <FaStore fontSize={28} color='green' />
          </div>

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#1a1918] text-[11px] leading-[17px] font-bold'>Total supply requests</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>5000</h1>
            </div>
            <FaCartPlus className='outlined-none' fontSize={28} color='green' />
          </div>

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Paid products</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>40,000</h1>
            </div>
            <FaMoneyBill fontSize={28} color='green' />
          </div>
          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Non Paid products</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>40,000</h1>
            </div>
            <FaMoneyBill fontSize={28} color='green' />
          </div>

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Total supply requests.</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>40,00</h1>
            </div>
            <FaTruck fontSize={28} color='' />
          </div>

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>inactive accounts</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>$40,000</h1>
            </div>
            <FaTruck fontSize={28} color='' />
          </div>
        </div>
      </div>
    )
  };


  const renderMerchantActivities = () => {
    return (
      <div>
        <div className='pt-[25px] px-[25px] bg-[#fafafa]'>


          <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            <Link to='/users'>
              <div
                className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'

              >
                <div>
                  <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>All Users</h2>
                  <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>40</h1>

                </div>
                <FaUserPlus fontSize={28} color='blue' />
              </div>
            </Link>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
              <div>
                <h2 className='text-text-[#B5850F] text-[11px] leading-[17px] font-bold'>Store-by-Store Report</h2>
              </div>
              <FaStore fontSize={28} color='purple' />
            </div>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
              <div>
                <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Individual Store Performance</h2>
         

              </div>
              <FaStore  fontSize={28} color='orange' />
            </div>

            <Link to='/products' className='hover:underline'>
            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
                <div>
                <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Paid and Non-Paid Products</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>30</h1>
                </div>
                <FaCartPlus fontSize={28} color='blue' />
            </div>
            </Link>
          </div>
        </div>
      </div>
    
  )};


  const renderClerkActivities = () => {
    return(
      <div>
        <div className='pt-[25px] px-[25px] bg-[#fafafa]'>
          

          <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
          <Link to='/users'>
            <div
              className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
              
            >
              <div>
                <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Products</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>40</h1>

              </div>
              <FaStore fontSize={28} color='blue' />
            </div>
            </Link>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
              <div>
                <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Stock</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>40</h1>

              </div>
              <FaEllipsisV fontSize={28} color='purple' />
            </div>

            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
              <div>
                <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Spoiled</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>10</h1>

              </div>
              <FaEllipsisV fontSize={28} color='orange' />
            </div>

            <Link to='/products' className='hover:underline'>
            <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
                <div>
                <h2 className='text-[#B5850F] text-[11px] leading-[17px] font-bold'>Non-Paid Products</h2>
                <h1 className='text-[20px] leading-[24px] font-bold text-gray-600 mt-5'>10</h1>

                </div>
                <FaCartPlus fontSize={28} color='blue' />
            </div>
            </Link>
          </div>
        </div>
      </div>
    
  )};


 

  

  return (

    <div className='pt-[25px] px-[25px] bg-[#fafafa]'>


      {/* Cards Section */}
      <>
        {userRole === "merchant" && (renderMerchantActivities())}
        {userRole === "admin" && (renderAdminCards())}
        {userRole === "clerk" && (renderClerkActivities())}
      </>


    

      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 py-4 ">
								<BarChart/>
                <AreaChart />
                <PieDonChart/>
                <ColumnChart/>
				
			</div>
    </div>
  );
};


export default Main;
