import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { ROUTES } from './resources/routes-constants'
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';


const RootComponent: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
                <Route path={ROUTES.NOTFOUND_ROUTE} element={<NotFound />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default RootComponent
