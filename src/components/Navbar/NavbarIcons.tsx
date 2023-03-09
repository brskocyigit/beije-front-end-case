import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthIcon, CloseMenuIcon, GroceryIcon, HamburgerIcon } from '../../icons/Icon'

interface IProps {
    modal?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const NavbarIcons: React.FC<IProps> = ({ modal}) => {
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between p-5">
            <div className="navbar-logo-style">
                <GroceryIcon className="w-6 h-6" />
            </div>
            <div className="navbar-logo-style">
                <AuthIcon className="w-6 h-6" />
            </div>
            {!modal ? (
                <div className="navbar-logo-style hidden max-[1150px]:flex" onClick={() =>dispatch({type:"modal",payload:true})}>
                    <HamburgerIcon className="w-7 h-7" />
                </div>
            ) : (
                <div className="navbar-logo-style hidden max-[1150px]:flex" onClick={() => dispatch({type:"modal",payload:false})}>
                    <CloseMenuIcon className="w-7 h-7" />
                </div>
            )}
        </div>
    )
}

export default NavbarIcons
