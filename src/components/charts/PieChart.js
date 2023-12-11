import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieDonChart = () => {
  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              outerHeight:200
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div className='w-full shadow-lg md:col-span-1 relative lg:h-[400px] h-[400px] mx-auto px-2 border rounded-lg bg-[#ffffff]'>
    <div className='h-full w-auto sm:w-full sm:h-full'>
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" width='100%'
          height='100%' />
    </div>
    </div>
  );
};

export default PieDonChart;
