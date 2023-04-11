import React, { useRef } from 'react';
import './NavBar.css'
import logo from "../Logo.svg"

export default function NavBar() {

    const navRef = useRef(null);
    const logoRef = useRef(null);
    const hamburgerRef = useRef(null);

    function handleHamburgerClick() {
      hamburgerRef.current.classList.toggle("clicked");
      navRef.current.classList.toggle("show");
      logoRef.current.classList.toggle("hide");
  }

  return (
    <>
    <div className='nav-container'>
      <a href='.'>
        <img src={logo} alt='Back to school logo' className='logo' ref={logoRef} />
      </a>
      <nav>
        <a href='.'>Home</a>
        <a href='./ourstory'>Our Story</a>
        <a href='./whatwedo'>What We Do</a>
        <a href='./contactus'>Contact Us</a>
        <a href='./getinvoved'>Get Involved</a>
      </nav>

      <div className='hamburger' ref={hamburgerRef} onClick={handleHamburgerClick}>
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>

      <div className='mobile-nav' ref={navRef}>
        <ul>
          <li>
            <a href='.'>Home</a>
          </li>
          <li>
            <a href='./ourstory'>Our Story</a>
          </li>
          <li>
            <a href='./whatwedo'>What We Do</a>
          </li>
          <li>
            <a href='./contactus'>Contact Us</a>
          </li>
          <li>
            <a href='./getinvoved'>Get Involved</a>
          </li>
        </ul>

      </div>

    </div>
    </>
  )
}
