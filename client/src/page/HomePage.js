import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import About from '../components/About'
import Blog from '../components/Blog'
import Calender from '../components/Calender'
import NavBar from '../components/Navbar/NavBar'
import Trainer from '../components/Trainer/Trainer'

export default function HomePage() {
    const navigate = useNavigate()

    // 4 Pages: 'trainer' | 'calender' | 'profile' | 'about'
    const [page, setPage] = useState('calender')

    // if user is not logged in, redirect to login page
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            navigate('/')
        }
    }, [navigate])

    const renderPageComponent = () => {
        switch (page) {
            case 'trainer':
                return <Trainer />
            case 'calender':
                return <Calender />
            case 'blog':
                return <Blog />
            case 'about':
                return <About />
            default:
                return null
        }
    }

    return (
        <div>
            <NavBar setPage={setPage} />
            {renderPageComponent()}
        </div>
    )
}
