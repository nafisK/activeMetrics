import React from 'react'
import blogPosts from './blogPosts'

export default function BlogContent() {
    return (
        <div>
            <section className=''>
                <div className='container w-full p-6 mx-auto space-y-6 sm:space-y-12'>
                    <a
                        rel='noopener noreferrer'
                        href='#'
                        className='block max-w-sm gap-3 mx-auto rounded-md sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12'
                    >
                        <img
                            src={blogPosts[0].image}
                            alt=''
                            className='object-cover w-full h-64 bg-gray-500 rounded sm:h-96 lg:col-span-7'
                        />
                        <div className='p-6 space-y-2 lg:col-span-5'>
                            <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>
                                {blogPosts[0].title}
                            </h3>
                            <span className='text-xs text-gray-400'>
                                {blogPosts[0].date}
                            </span>
                            <p>{blogPosts[0].content}</p>
                        </div>
                    </a>
                    <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {blogPosts.slice(1).map((post, index) => (
                            <a
                                key={index}
                                rel='noopener noreferrer'
                                href='#'
                                className='max-w-sm mx-auto border rounded '
                            >
                                <img
                                    role='presentation'
                                    className='object-cover w-full bg-gray-500 rounded h-44 '
                                    src={post.image}
                                    alt=''
                                />
                                <div className='p-6 space-y-2'>
                                    <h3 className='text-2xl font-semibold hover:underline focus:underline'>
                                        {post.title}
                                    </h3>
                                    <span className='text-xs text-gray-400'>
                                        {post.date}
                                    </span>
                                    <p>{post.content}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='button'
                            className='px-6 py-3 text-sm text-gray-400 bg-gray-900 rounded-md hover:underline'
                        >
                            Load more posts...
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
