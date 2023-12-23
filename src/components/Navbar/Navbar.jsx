import React from 'react'
import './Navbar.css'
import logo from './../../assets/logo.png';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">

{/* 17 */}
            </div>
            <button className="desktopBtn">
                <img src="" alt="" className="desktopMenuImg" />Contact Me</button>

        </nav>

    )
}

export default Navbar;