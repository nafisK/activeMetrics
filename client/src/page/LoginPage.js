import React from 'react'
import SignupForm from '../components/SignupForm'
import workoutImage from '../assets/ForLogin/run.jpg'
import LoginForm from '../components/LoginForm'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LoginPage = () => {
    const [form, setForm] = useState('login')
    const user = localStorage.getItem('user')
    const navigate = useNavigate()

    // Check if user data exists in local storage
    useEffect(() => {
        if (user) {
            // User data exists, navigate to home page
            navigate('/home')
        }
    }, [navigate, user])

    return (
        <div className='flex h-screen'>
            <div className='w-1/2 h-full relative'>
                <img
                    src={workoutImage}
                    alt='workout'
                    className='absolute inset-0 w-full h-full object-cover blur-sm'
                />
            </div>
            <div className='w-1/2 flex items-center justify-center bg-white'>
                {form === 'signup' ? (
                    <SignupForm setForm={setForm} />
                ) : (
                    <LoginForm setForm={setForm} />
                )}
            </div>
        </div>
    )
}

export default LoginPage
