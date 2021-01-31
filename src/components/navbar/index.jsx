/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Navbar = ({ toggle, isOpen }) => {
     const isHideNav = !isOpen ? 'mobile-navbar--hidden' : '';

     const menuItems = [
          { children: 'HOME', to: '/' },
          { children: 'SIGNUP', to: '/signup' },
          { children: 'LOGIN', to: '/login' },
          { children: 'ARCHIVES', to: '/archives' },
     ];

     return (
          <div className={`mobile-navbar ${isHideNav}`} onClick={toggle}>
               <ul className='mobile-navbar__list'>
                    {menuItems.map((menuItem) => (
                         <li key={menuItem.to} className='mobile-navbar__item'>
                              <Link to={menuItem.to} className='mobile-navbar__link'>
                                   {menuItem.children}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default Navbar;
