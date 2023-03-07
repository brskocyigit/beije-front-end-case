import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

import { ROUTES } from './resources/routes-constants'


const RootComponent: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
