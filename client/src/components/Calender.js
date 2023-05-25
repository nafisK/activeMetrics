import React from 'react'
import logo from '../assets/activeMetrics.jpg'
import CreateCalendar from './Calender/CreateCalendar'

export default function Calendar() {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-full px-4 max-w-7xl'>
                <div className='flex items-center p-8 mb-5 bg-white rounded-lg shadow-md'>
                    <img
                        src={logo}
                        className='w-auto h-28'
                        alt='Active Metrics'
                    />
                    <h2 className='ml-5 font-bold text-cyan-500 text-7xl'>
                        Calendar
                    </h2>
                </div>
                <div className='flex justify-center bg-white rounded-lg shadow-md '>
                    {/* Content here */}

                    <CreateCalendar />
                </div>
            </div>
        </div>
    )
}
