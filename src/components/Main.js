import React from 'react';
import { FaEllipsisV, FaStore } from 'react-icons/fa';
import AreaChart from './charts/AreaChart';
import PieChartPlot from './charts/PieChart';
import { useState } from 'react';

import UserTable from './UserTable';

const Main = ({ userRole }) => {
    const [showUserTable, setShowUserTable] = useState(false);
  
    const renderMerchantActivities = () => {
      return (
        <div>
          <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            {/* Merchant-specific activities */}
            <div
                className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-200'
                onClick={() => setShowUserTable(true)}
                >
                <div>
                    <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>All Users</h2>
                    {/* Add functionality to add an admin */}
                </div>
                <FaEllipsisV fontSize={28} color='blue' />
                </div>

          

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Store-by-Store Report</h2>
              {/* Add functionality to view store-by-store report */}
            </div>
            <FaEllipsisV fontSize={28} color='purple' />
          </div>

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Individual Store Performance</h2>
              {/* Add functionality to view individual store performance */}
            </div>
            <FaEllipsisV fontSize={28} color='orange' />
          </div>

          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-200'>
            <div>
              <h2 className='text-[#1f1e1e] text-[11px] leading-[17px] font-bold'>Paid and Non-Paid Products</h2>
              {/* Add functionality to view paid and non-paid products */}
            </div>
            <FaEllipsisV fontSize={28} color='green' />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='pt-[25px] px-[25px] bg-[#fafafa]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>DashBoard</h1>
        <button className='bg-blue-400 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate report</button>
      </div>

      {/* Render merchant-specific activities */}
      {userRole === 'merchant' && renderMerchantActivities()}

      {/* charts */}
      <div className='flex mt-[20px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
            <h2>Earnings overview</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>
          <AreaChart />
        </div>

        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2>Revenue Resource</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>
          <PieChartPlot />
        </div>
      </div>
    </div>
  );
};

export default Main;
