import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcements</h1>
            <span className='text-xs text-gray-400'>View All</span>
        </div>
    <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-lamaSkyLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Community service</h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                    2025-01-01
                </span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>
            We are excited to announce the upcoming Community Clean-Up Day on Saturday, November 5th. Volunteers are welcome to join us as we work together to beautify our neighborhood. 
            Meet at the school parking lot at 9 AM
            </p>
        </div>
        <div className='bg-lamaPurpleLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Meetings</h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-2'>
                    2025-01-01
                </span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>
            This is a reminder for all staff members that the monthly staff meeting will take place on Friday, October 15th at 3 PM in the conference room. 
            Please come prepared with updates from your departments.
            </p>
        </div>
        <div className='bg-lamalYellowLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Exams</h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                    2025-01-12
                </span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Final exams for all grades will be held from December 5th to December 12th. 
                The detailed schedule has been posted on the school website and in classrooms. Make sure you are well-prepared!
            </p>
        </div>
    </div>
    </div>
  );
};

export default Announcements;