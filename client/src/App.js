import './App.css'
import LoginPage from './page/LoginPage'
import ErrorPage from './page/ErrorPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/HomePage'

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
