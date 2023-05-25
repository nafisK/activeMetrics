import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/activeMetrics.jpg'

export default function LoginForm({ setForm }) {
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        // Collect input values
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        // Make API request using Axios
        axios
            .post('http://localhost:4000/user/login', { email, password })
            .then(response => {
                if (response.status === 200) {
                    // Cache the returned JSON
                    localStorage.setItem('user', JSON.stringify(response.data))

                    // Navigate to home page
                    navigate('/home')
                } else {
                    console.log('Login failed:', response)
                }
            })
            .catch(error => {
                console.log('Login failed:', error)
            })
    }

    return (
        <>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <img
                        className='mx-auto h-32 w-auto'
                        src={logo}
                        alt='Your Company'
                    />
                    <h1 className=' text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                        Active Metrics
                    </h1>
                </div>

                <div className=' sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' action='#' method='POST'>
                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor='password'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Password
                                </label>
                                <div className='text-sm'>
                                    <a
                                        href='#'
                                        className='font-semibold text-cyan-500 hover:text-cyan-400'
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
                                onClick={handleLogin}
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    <p className='mt-10 text-center text-sm text-gray-500'>
                        Not a member?{' '}
                        <a
                            href='#'
                            className='font-semibold leading-6 text-cyan-500 hover:text-cyan-400'
                            onClick={() => setForm('signup')}
                        >
                            Sign up!
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
