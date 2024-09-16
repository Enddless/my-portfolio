import '../../styles/styles.scss';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import logo from 'public/logo.svg';

function Header() {
  const refModal = useRef();
  const openModal = () => {
    refModal.current.showModal();
  };

  return (
    <header className='header'>
      <div className='header__inner container'>
        <nav className='header__menu hidden-mobile'>
          <div className='header__logo'>
            <img src={logo} alt='' width={50} height={60} />
          </div>
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
            <a href='tel:+79852585524' className='header__menu-contacts-link'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                xmlns='http://www.w3.org/2000/svg'>
                {/* <rect width='40' height='40' rx='20' fill='#232323' /> */}
                <path d='M13.6796 12.3204L14.2929 11.7071C14.6834 11.3166 15.3166 11.3166 15.7071 11.7071L18.2929 14.2929C18.6834 14.6834 18.6834 15.3166 18.2929 15.7071L16.5005 17.4995C16.2016 17.7984 16.1275 18.255 16.3165 18.6331C17.4093 20.8186 19.1814 22.5907 21.3669 23.6835C21.745 23.8725 22.2016 23.7984 22.5005 23.4995L24.2929 21.7071C24.6834 21.3166 25.3166 21.3166 25.7071 21.7071L28.2929 24.2929C28.6834 24.6834 28.6834 25.3166 28.2929 25.7071L27.6796 26.3204C25.5683 28.4317 22.2257 28.6693 19.837 26.8777L18.6286 25.9714C16.885 24.6638 15.3362 23.115 14.0286 21.3714L13.1223 20.163C11.3307 17.7743 11.5683 14.4317 13.6796 12.3204Z' />
              </svg>
            </a>
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
                <Link to='/' className='mobile-overlay__link'>
                  Home
                </Link>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink smooth to='/#skills' className='mobile-overlay__link'>
                  Skills
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink smooth to='/#layouts' className='header__menu-link'>
                  Layouts
                </HashLink>
              </li>
              <li className='mobile-overlay__item'>
                <HashLink smooth to='/#projects' className='mobile-overlay__link'>
                  Projects
                </HashLink>
              </li>

              <li className='mobile-overlay__item'>
                <HashLink smooth to='/#components' className='mobile-overlay__link'>
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
