import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Contacts from '../contacts';

function Header() {
  const refModal = useRef();
  const openModal = () => {
    refModal.current.showModal();
  };

  const closeModal = () => {
    refModal.current.close();
  };

  return (
    <header className='header'>
      <div className='header__inner container'>
        <nav className='header__menu hidden-mobile'>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <Link to='/' className='header__menu-link'>
                Home
              </Link>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#skills' className='header__menu-link'>
                Skills
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#layouts' className='header__menu-link'>
                Layouts
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#projects' className='header__menu-link'>
                Projects
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink smooth to='/#components' className='header__menu-link'>
                Components
              </HashLink>
            </li>
          </ul>
          <div className='header__menu-contacts'>
            <Contacts />
          </div>
        </nav>

        <button
          className='button__burger-menu burger-button visible-mobile'
          type='button'
          onClick={openModal}>
          <span className='visually-hidden'>Open navigation menu</span>
        </button>

        <dialog
          className='mobile-overlay visible-mobile'
          id='mobileOverlay'
          ref={refModal}>
          <form className='mobile-overlay__close-button-wrapper' method='dialog'>
            <button className='mobile-overlay__close-button cross-button' type='submit'>
              <span className='visually-hidden'>Close navigation menu</span>
            </button>
          </form>
          <div className='mobile-overlay__body'>
            <ul className='mobile-overlay__list'>
              <li className='mobile-overlay__item'>
                <Link to='/' className='mobile-overlay__link' onClick={closeModal}>
                  Home
                </Link>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#skills'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Skills
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#layouts'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Layouts
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#projects'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Projects
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#components'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Components
                </HashLink>
              </li>
            </ul>
          </div>
        </dialog>
      </div>
    </header>
  );
}

export default Header;
