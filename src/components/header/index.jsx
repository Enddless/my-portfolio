import { useRef, useState, useEffect } from 'react';
import ThemeSwitcher from '../theme-switcher';

function Header() {
  const [activeItem, setActiveItem] = useState('About');
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const refModal = useRef();

  const namesList = ['About', 'Skills', 'Landings', 'React_projects'];
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
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offset = 50;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveItem(targetId.replace('#', ''));
    }
  };

  const handleScrollAndClose = (event) => {
    handleScroll(event);
    closeModal();
  };

  const handleScrollActive = () => {
    setIsHeaderActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollActive);
    return () => {
      window.removeEventListener('scroll', handleScrollActive);
    };
  }, [activeItem]);

  return (
    <header className={`header _active ${isHeaderActive ? 'scroll' : ''}`}>
      <div className='header__wrapper'>
        <div className='header__inner container'>
          <nav className='header__menu hidden-mobile'>
            <ul className='header__menu-list'>
              {namesList.map((item) => (
                <li className='header__menu-item' key={item}>
                  <button
                    data-hover={item === 'React_projects' ? 'React projects' : item}
                    className='header__menu-link'
                    data-js-scroll-to={`{"anchor": "#${item}"}`}
                    onClick={handleScroll}>
                    {item === 'React_projects' ? 'React projects' : item}
                  </button>
                </li>
              ))}
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
                {namesList.map((item) => (
                  <li className='mobile-overlay__item' key={item}>
                    <button
                      data-hover={item}
                      className='header__menu-link'
                      data-js-scroll-to={`{"anchor": "#${item}"}`}
                      onClick={handleScrollAndClose}>
                      {item === 'React_projects' ? 'React projects' : item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </dialog>
        </div>
      </div>
    </header>
  );
}

export default Header;
