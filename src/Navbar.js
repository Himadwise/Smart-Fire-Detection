import React from 'react'
import logo from "./Images/aar.png"

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="navheader">
                    <div className="sidenav">
                        <img src={logo} alt="aar logo" />
                        <h1>Smart Fire Detection</h1>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#" className='active'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
