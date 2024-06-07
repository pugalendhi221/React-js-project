import React from 'react';
import './Navbar.css';
import searchicon from '../../assets/search.png';
import logo from '../../assets/Logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt='' className='logo'/>
            {/* <p>SSD Controls</p> */}
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Product & System</li>
                <li>Support & Service</li>
                <li>Contact Us</li>
            </ul>

            <div className='search-box'>
                <input type='text' placeholder='Search' />
                <img src={searchicon} alt=''/>
            </div>

        </div>
    )
}

export default Navbar