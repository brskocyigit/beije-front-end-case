import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { ROUTES } from './resources/routes-constants'
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';


const RootComponent: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
                <Route path={ROUTES.REGISTER} element={<Register/>}/>
                <Route path={ROUTES.CART} element={<Cart/>}/>
                <Route path={ROUTES.NOTFOUND_ROUTE} element={<NotFound />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default RootComponent
