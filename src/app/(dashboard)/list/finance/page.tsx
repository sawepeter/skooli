import CountChart from '@/components/CountChart';
import FinanceChart from '@/components/FinanceChart';
import Image from 'next/image';
import React from 'react';

const FinanceListPage = () => {
  return (
    <div className='min-h-screen p-8 bg-gray-100'>
        <div className='flex items-center justify-between mb-8'>
            {/* Title */}
            <h1 className='text-3xl font-semibold'>Fees Collection</h1>

            {/* Search and Filters */}
            <div className='flex items-center space-x-4'>
                {/* Search Input */}
                <div className='relative'>
                    <input type="text" placeholder='Search by Name or ID'  className='p-2 pl-10 w-64 border rounded-md border-gray-300 focus:outline-none' />

                </div>

                {/* Date Picker */}
                <div className='relative'>
                    <button className='flex items-center px-4 py-2 bg-white border rounded-md border-gray-300'>
                        Today
                    </button>
                </div>

                {/* Class Filter */}
                <div className='relative'>
                    <select className='px-4 py-2 bg-white border rounded-md border-gray-300 text-gray-600 focus:outline-none'>
                        <option>All Classes</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                    </select>
                </div>

                {/* Status Filter */}
                <div className='relative'>
                    <select className='px-4 py-2 bg-white border rounded-md border-gray-300 text-gray-600 focus:outline-none'>
                        <option>All Status</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Overdue</option>
                    </select>
                </div>
            </div>
         </div>

               
                <div className="flex gap-4 flex-col lg:flex-row">
                     {/* Finance CHART */}
                <div className="w-full lg:w-2/3 h-[450px]">
                 <FinanceChart />
                </div>
                {/* Summary Cards */}
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
                   
                           {/*Card 1 */} 
                  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title 1</h2>
                      <p className="text-gray-600">This is a description for card 1.</p>
                      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Action</button>
                  </div>

                  {/*Card 2 */}
                  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title 2</h2>
                      <p className="text-gray-600">This is a description for card 2.</p>
                      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Action</button>
                  </div>

                  {/*Card 3 */}
                  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title 3</h2>
                      <p className="text-gray-600">This is a description for card 3.</p>
                      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Action</button>
                  </div>

                  {/*Card 4 */}
                  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title 4</h2>
                      <p className="text-gray-600">This is a description for card 4.</p>
                      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Action</button>
                  </div>
                </div>
            </div>
            

                {/* Fee Collection Table */}
                <div className='bg-white rounded-lg shadow-md p-4'>
                    <table className='w-full text-left text-sm text-gray-500'>
                        <thead>
                            <tr>
                                <th className='p-2'>Student Name</th>
                                <th className='p-2'>Class</th>
                                <th className='p-2'>Tuition Fee</th>
                                <th className='p-2'>Activities Fee</th>
                                <th className='p-2'>Miscellaneous</th>
                                <th className='p-2'>Amount</th>
                                <th className='p-2'>Status</th>
                                <th className='p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Sophia Wilson", class: "11A", tuition: "$4,500", activities: "$300", misc: "$200", amount: "$5,000", status: "Paid", color: "bg-paid" },
                                { name: "Ethan Lee", class: "10B", tuition: "$4,500", activities: "$250", misc: "$150", amount: "$4,900", status: "Pending", color: "bg-pending" },
                                { name: "Michael Brown", class: "12 AP Calculus", tuition: "$4,800", activities: "$300", misc: "$200", amount: "$5,300", status: "Paid", color: "bg-paid" },
                                { name: "Ava Smith", class: "9B", tuition: "$4,500", activities: "$250", misc: "$100", amount: "$4,850", status: "Overdue", color: "bg-overdue" },
                                { name: "Lucas Johnson", class: "11A", tuition: "$4,500", activities: "$300", misc: "$200", amount: "$5,000", status: "Paid", color: "bg-paid" },
                                { name: "Isabella Garcia", class: "8B", tuition: "$4,200", activities: "$200", misc: "$150", amount: "$4,550", status: "Pending", color: "bg-pending" },
                            ].map((student, index) => (
                                <tr key={index} className='border-b border-gray-200 even:bg-slate-50 hover:bg-gray-100'>
                                    <td className='p-2'>{student.name}</td>
                                    <td className='p-2'>{student.class}</td>
                                    <td className='p-2'>{student.tuition}</td>
                                    <td className='p-2'>{student.activities}</td>
                                    <td className='p-2'>{student.misc}</td>
                                    <td className='p-2'>{student.amount}</td>
                                    <td className='p-2'>
                                        <span className={`p-1 px-2 rounded-full text-white ${student.color}`}>{student.status}</span>
                                    </td>
                                    <td className='p-2 space-x-2'>
                                        <button className='text-blue-500'>
                                           Edit
                                        </button>
                                        <button className='text-red-500'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
               

        </div>

    </div>
  );
}

export default FinanceListPage;