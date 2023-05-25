import React from 'react'
import logo from '../assets/activeMetrics.jpg'
import BlogContent from './Blog/BlogContent'

export default function Blog() {
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
                        Blog
                    </h2>
                </div>
                <BlogContent />
            </div>
        </div>
    )
}
