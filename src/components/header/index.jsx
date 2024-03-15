import React from 'react';
import './styles.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <nav className='header__navigation'>
        <ul className='nav__links'>
          <li className='nav__item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav__item'>
            <HashLink smooth to='/#skills'>
              Skills
            </HashLink>
          </li>
          <li className='nav__item'>
            <HashLink smooth to='/#content'>
              Projects
            </HashLink>
          </li>
          <li className='nav__item'>
            <HashLink smooth to='/#components'>
              Components
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
