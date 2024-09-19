import { HashLink } from 'react-router-hash-link';
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

  const handleScroll = (id) => {
    setTimeout(() => {
      window.history.pushState(null, '', window.location.pathname);
    }, 500);
  };

  return (
    <header className='header'>
      <div className='header__inner container'>
        <nav className='header__menu hidden-mobile'>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <HashLink
                smooth
                to='/#About'
                data-hover='About me'
                className='header__menu-link'
                onClick={() => handleScroll('About')}>
                About me
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink
                smooth
                to='/#Skills'
                data-hover='Skills'
                className='header__menu-link'
                onClick={() => handleScroll('Skills')}>
                Skills
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink
                smooth
                to='/#Layouts'
                data-hover='Layouts'
                className='header__menu-link'
                onClick={() => handleScroll('Layouts')}>
                Layouts
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink
                smooth
                to='/#Projects'
                data-hover='Projects'
                className='header__menu-link'
                onClick={() => handleScroll('Projects')}>
                Projects
              </HashLink>
            </li>
            <li className='header__menu-item'>
              <HashLink
                smooth
                to='/#Components'
                data-hover='Components'
                className='header__menu-link'
                onClick={() => handleScroll('Components')}>
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
                <HashLink
                  smooth
                  to='/#About'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  About me
                </HashLink>
              </li>

              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#Skills'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Skills
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#Layouts'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Layouts
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#Projects'
                  className='mobile-overlay__link'
                  onClick={closeModal}>
                  Projects
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink
                  smooth
                  to='/#Components'
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
