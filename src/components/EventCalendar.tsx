"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


//TEMPORARY
const events = [
    {
        id: 1,
        title: "Parents Price Giving Day",
        time:"9:00 AM - 15:00 PM",
        description: "Prizing giving day to be attended by all parents to witness top achievers awarding",
    },
    {
        title: "BOM Meeting",
        time: "9:00 AM - 14:00 PM",
        descriptions: "discuss upcoming term activities",
    },
    {
        id: 3,
        title: "Cultural Day",
        time: "10:00 AM - 15:00 PM",
        descriptions: "School community celebrating different cultures",
    },
];


const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <div className='flex flex-col gap-4'>
            {events.map((event) => (
                <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-gray-300 text-xs'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                </div>
            ))}
        </div>
        </div>
  );
};

export default EventCalendar;