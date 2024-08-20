import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/spectatr.png';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Image src={Logo} alt="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
