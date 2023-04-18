import React, { useRef, useEffect } from 'react';
import './NavBar.css'
import Logo from "./Logo.svg";
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);

  function handleHamburgerClick() {
    hamburgerRef.current.classList.toggle("clicked");
    navRef.current.classList.toggle("show");
    logoRef.current.classList.toggle("hide");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current.classList.contains("show") && !event.target.closest('.mobile-nav')) {
        // If the mobile navigation menu is open and the click is not inside it, toggle the classes to return it to its default state
        if (!event.target.closest('.hamburger')) {
          // If the click is not inside the hamburger button, toggle the classes to return the mobile navigation menu to its default state
          hamburgerRef.current.classList.remove("clicked");
          navRef.current.classList.remove("show");
          logoRef.current.classList.remove("hide");
        } else {
          // If the click is inside the hamburger button, allow the event to continue to the handleHamburgerClick function
          return;
        }
      }
    }
    

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <>
      <div className='nav-container-wrapper'>
        <div className='nav-container'>
          <NavLink to='.'>
            <img src={Logo} alt='Back to school logo' className='logo' ref={logoRef} />
          </NavLink>
          <nav>
            <NavLink to='.'>Home</NavLink>
            <NavLink to='./ourstory'>Our Story</NavLink>
            <NavLink to='./whatwedo'>What We Do</NavLink>
            <NavLink to='./contactus'>Contact Us</NavLink>
            <NavLink to='./getinvolved'>Get Involved</NavLink>
          </nav>

          <div className='hamburger' ref={hamburgerRef} onClick={handleHamburgerClick}>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>

          <div className='mobile-nav' ref={navRef}>
            <ul>
              <li>
                <NavLink to='.' onClick={handleHamburgerClick}>Home</NavLink>
              </li>
              <li>
                <NavLink to='./ourstory' onClick={handleHamburgerClick}>Our Story</NavLink>
              </li>
              <li>
                <NavLink to='./whatwedo' onClick={handleHamburgerClick}>What We Do</NavLink>
              </li>
              <li>
                <NavLink to='./contactus' onClick={handleHamburgerClick}>Contact Us</NavLink>
              </li>
              <li>
                <NavLink to='./getinvolved' onClick={handleHamburgerClick}>Get Involved</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
