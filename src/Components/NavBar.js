import React from 'react'
import logo from "../Assets/logo.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../Styles/NavBarstyle.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className="leftSide">
                <h1 style={{ color: "white" }}>Swiggy</h1>
                {/* <img src={logo} alt="failed" className='nav_logo' /> */}
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>

    )
}

export default NavBar
