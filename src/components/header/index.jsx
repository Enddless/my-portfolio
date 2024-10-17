import { useRef } from 'react';
import ThemeSwitcher from '../theme-switcher';

function Header() {
  const refModal = useRef();

  const openModal = () => {
    refModal.current.showModal();
  };

  const closeModal = () => {
    refModal.current.close();
  };

  const handleScroll = (event) => {
    const targetId = JSON.parse(
      event.currentTarget.getAttribute('data-js-scroll-to')
    ).anchor;
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollAndClose = (event) => {
    handleScroll(event); // Плавная прокрутка
    closeModal(); // Закрытие диалога
  };

  return (
    <header className='header container'>
      <div className='header__inner'>
        <nav className='header__menu hidden-mobile'>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <button
                data-hover='About me'
                className='header__menu-link'
                data-js-scroll-to='{"anchor": "#About"}'
                onClick={handleScroll}>
                About me
              </button>
            </li>
            <li className='header__menu-item'>
              <button
                data-hover='Skills'
                className='header__menu-link'
                data-js-scroll-to='{"anchor": "#Skills"}'
                onClick={handleScroll}>
                Skills
              </button>
            </li>
            <li className='header__menu-item'>
              <button
                data-hover='Landings'
                className='header__menu-link'
                data-js-scroll-to='{"anchor": "#Landings"}'
                onClick={handleScroll}>
                Landings
              </button>
            </li>
            <li className='header__menu-item'>
              <button
                data-hover='Projects'
                className='header__menu-link'
                data-js-scroll-to='{"anchor": "#Projects"}'
                onClick={handleScroll}>
                Projects
              </button>
            </li>
            <li className='header__menu-item'>
              <button
                data-hover='Components'
                className='header__menu-link'
                data-js-scroll-to='{"anchor": "#Components"}'
                onClick={handleScroll}>
                Components
              </button>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />

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
                <button
                  className='mobile-overlay__link'
                  data-js-scroll-to='{"anchor": "#About"}'
                  onClick={handleScrollAndClose}>
                  About me
                </button>
              </li>
              <li className='mobile-overlay__item'>
                <button
                  className='mobile-overlay__link'
                  data-js-scroll-to='{"anchor": "#Skills"}'
                  onClick={handleScrollAndClose}>
                  Skills
                </button>
              </li>
              <li className='mobile-overlay__item'>
                <button
                  className='mobile-overlay__link'
                  data-js-scroll-to='{"anchor": "#Landings"}'
                  onClick={handleScrollAndClose}>
                  Landings
                </button>
              </li>
              <li className='mobile-overlay__item'>
                <button
                  className='mobile-overlay__link'
                  data-js-scroll-to='{"anchor": "#Projects"}'
                  onClick={handleScrollAndClose}>
                  Projects
                </button>
              </li>
              <li className='mobile-overlay__item'>
                <button
                  className='mobile-overlay__link'
                  data-js-scroll-to='{"anchor": "#Components"}'
                  onClick={handleScrollAndClose}>
                  Components
                </button>
              </li>
            </ul>
          </div>
        </dialog>
      </div>
    </header>
  );
}

export default Header;
