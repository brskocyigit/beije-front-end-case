import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AuthIcon, CloseMenuIcon, GroceryIcon, HamburgerIcon } from '../../icons/Icon'

//Proplar için tip tanımlaması
interface IProps {
    modal?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const NavbarIcons: React.FC<IProps> = ({ modal }) => {
    const dispatch = useDispatch()
    return (
        <div className="flex justify-between p-5">
            <Link to={'/cart'} className="navbar-logo-style">
                <GroceryIcon className="w-6 h-6" />
            </Link>
            <Link to={'/auth/login'} className="navbar-logo-style">
                <AuthIcon className="w-6 h-6" />
            </Link>
            {!modal ? (
                // Bu butona tıklanırsa modal değeri 'true' olur ve menü açılır.
                <div className="navbar-logo-style hidden max-[1150px]:flex" onClick={() => dispatch({ type: 'modal', payload: true })}>
                    <HamburgerIcon className="w-7 h-7" />
                </div>
            ) : (
                // Bu butona tıklanırsa modal değeri 'false' olur ve menü kapanır.
                <div className="navbar-logo-style hidden max-[1150px]:flex" onClick={() => dispatch({ type: 'modal', payload: false })}>
                    <CloseMenuIcon className="w-7 h-7" />
                </div>
            )}
        </div>
    )
}

export default NavbarIcons
