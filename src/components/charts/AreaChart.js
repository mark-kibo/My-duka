import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  });

  return (
    <div className='w-full shadow-lg md:col-span-1 relative lg:h-[400px] h-[400px] mx-auto px-2 border rounded-lg bg-[#ffffff]'>
    <div className='h-full w-auto sm:w-full sm:h-full'>
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
    </div>
  );
};

export default AreaChart;
