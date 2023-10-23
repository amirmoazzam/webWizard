import React, { useState, useEffect } from 'react';
// import Navbar from './components/navbar';
import logo from './media/logo.svg';
// import three_dots from './media/menu_3dot.svg';
import './css/header.css';
import { Link, Events, scrollSpy } from 'react-scroll';

export default function Header() {
  // mobile nav setting
  // close menu on click
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.screenY <= 50) {
      setColor(true)
    } else { setColor(false) }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }) 
  return (
    <header className={color ? 'header-bg': ''}>
      <span>
          <a href="#"><img src={logo} alt="logo" width='100px' height='60px'/></a>
      </span>
      <div className='span-cont-nav'>
        <nav className='main-navbar'>
            <ul>
                <li><Link to={'main'} spy={true} smooth={true} offset={-300} duration={500}>Home</Link></li>
                <li><Link to={'about'} spy={true} smooth={true} offset={-80} duration={500}>About</Link></li>
                <li><Link to={'contact'} spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
            </ul>
        </nav>
        <span>
            <button type='button'>account</button>
        </span>
      </div>
      {/* <span>
          <div className="desktop-menu"><Navbar/></div>
          <div className="mobile-menu">
            <img src={three_dots} alt="mobile-menu-switcher" width="50px" height="50px"/>
            <Navbar/>
          </div>
      </span> */}
    </header>
  )
}
