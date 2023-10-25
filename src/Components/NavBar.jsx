import React, { useRef, useEffect } from 'react';
import './NavBar.css'
import Logo from "./Logo.svg";
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";

export default function NavBar() {

// defining refs
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);

  // functions on click to add class
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
            <div className='main__menu'>
              <NavLink to='./ngo-programs-and-initiatives'>Programs<FaChevronDown/></NavLink>
                <div className='sub__menu'>
                  <div>
                    <NavLink to='/back-to-school-supply-drive'>Supply Drive</NavLink>
                  </div>
                  <div>
                    <NavLink to='/sponsor-a-child-campaign'>Sponsor a Child</NavLink>
                  </div>
                  <div>
                    <NavLink to='/teacher-training-and-support'>Teacher Training & Support</NavLink>                   
                  </div>
                  <div>
                    <NavLink to='/skill-acquisition-campaign'>Skill Acquisition</NavLink>
                  </div>
                  <div>
                    <NavLink to='/digital-library'>Digital Library</NavLink>                                         
                  </div>
                </div>
            </div>
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
                <NavLink to='./ngo-programs-and-initiatives' onClick={handleHamburgerClick}>Programs & Initiatives</NavLink>
              </li>   
                <li className='m-sub__menu'>
                  <NavLink to='/back-to-school-supply-drive' onClick={handleHamburgerClick}>Supply Drive</NavLink>
                </li>
                <li className='m-sub__menu'>
                  <NavLink to='/sponsor-a-child-campaign' onClick={handleHamburgerClick}>Sponsor a Child</NavLink>
                </li>
                <li className='m-sub__menu'>
                  <NavLink to='/teacher-training-and-support' onClick={handleHamburgerClick}>Teacher Training & Support</NavLink>
                </li> 
                <li className='m-sub__menu'>
                  <NavLink to='/skill-acquisition-campaign' onClick={handleHamburgerClick}>Skill Acquisition</NavLink>
                </li>
                <li className='m-sub__menu'>
                  <NavLink to='/digital-library' onClick={handleHamburgerClick}>Digital Library</NavLink>
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
