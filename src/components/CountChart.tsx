"use client";

import Image from 'next/image';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    {
      name: "Total",
      count: 106,
      fill: "white",
    },
    {
      name: "Girls",
      count: 70,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: 36,
      fill: "#C3EBFA",
    },
  ];

const CountChart = () => {
  return (
    <div className="bg-skooliBackground rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="relative w-full h-[75%]">
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar background dataKey="count" />
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-skooliYellow rounded-full" />
                <h1 className='font-bold'>36</h1>
                <h2 className='text-xs text-gray-300'>Boys (34%)</h2>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-skooliPurple rounded-full'/>
                <h1 className='font-bold'>70</h1>
                <h2 className='text-xs text-gray-300'>Girls (66%)</h2>
            </div>
        </div>
    </div>
  );
};

export default CountChart;