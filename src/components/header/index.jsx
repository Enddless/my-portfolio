// import './styles.css';
import '../../styles/styles.scss';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='header__inner container'>
        <nav className='header__menu hidden-mobile'>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#skills'>
                Skills
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#content'>
                Projects
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#components'>
                Components
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
