import React from 'react'
import logo from '../../assets/activeMetrics.jpg'
import HealthGptChat from './HealthGptChat'
import VideoLibrary from './VideoLibrary'

export default function Trainer() {
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
                        Trainer
                    </h2>
                </div>
                <div className='flex justify-around p-8 shadow-lg my-10rounded-lg'>
                    {/* Content here */}
                    <VideoLibrary />
                    <HealthGptChat />
                </div>
            </div>
        </div>
    )
}
