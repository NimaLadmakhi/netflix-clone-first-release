/** @format */

import MenuWhiteIcon from 'assets/images/menu-white.svg';
import Navbar from 'components/navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './index.scss';

const Header = () => {
     const [toggle, setToggle] = useState(false);
     const handleToggle = () => {
          setToggle((prevToggle) => !prevToggle);
          document.body.style.overflowY = !toggle ? 'hidden' : 'scroll';
     };
     const isBlurText = toggle ? 'header__link--blur' : '';

     return (
          <header className='header'>
               <nav className='header__nav'>
                    <Link className={`header__link ${isBlurText}`} to='/'>
                         netflix clone
                    </Link>
                    <img onClick={handleToggle} className='header__logo' src={MenuWhiteIcon} />
                    <Navbar toggle={handleToggle} isOpen={toggle} />
               </nav>
          </header>
     );
};

export default Header;
