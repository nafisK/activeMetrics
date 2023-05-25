import React from 'react'
import logo from '../assets/activeMetrics.jpg'
import AboutContent from './About/AboutContent'

export default function About() {
    return (
        <div className='flex justify-center'>
            <div className='w-full px-4 max-w-7xl'>
                <div className='flex items-center p-8 mb-5 bg-white rounded-lg shadow-md'>
                    <img
                        src={logo}
                        className='w-auto h-28'
                        alt='Active Metrics'
                    />
                    <h2 className='ml-5 font-bold text-cyan-500 text-7xl'>
                        About
                    </h2>
                </div>
                <div className=''>
                    {/* Content here */}
                    <AboutContent />
                </div>
            </div>
        </div>
    )
}
