import { useEffect, useRef, useState } from 'react';

import { ThemeSwitcher } from '@/features/theme-switcher';
import { NavLink, Snow } from '@/shared/ui';

import './Header.scss';

interface AnchorItem {
  title: string;
  anchor: string;
}

const anchors: AnchorItem[] = [
  { title: 'Обо мне', anchor: 'Обо мне' },
  { title: 'Проекты', anchor: 'Проекты' },
  { title: 'Почему я', anchor: 'Почему я' },
  { title: 'Инструменты', anchor: 'Инструменты' },
  { title: 'Контакты', anchor: 'Контакты' }
];

const SCROLL_OFFSET = 50;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);

    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - SCROLL_OFFSET,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const headerClassName = isScrolled
    ? 'header header--visible header--scrolled'
    : 'header header--visible';

  return (
    <header className={headerClassName}>
      <div className='header__wrapper'>
        <Snow />

        <div className='header__inner container'>
          <nav className='header__menu hidden-mobile'>
            <ul className='header__menu-list'>
              {anchors.map(({ title, anchor }) => (
                <li className='header__menu-item' key={anchor}>
                  <NavLink label={title} onClick={() => scrollToSection(anchor)} />
                </li>
              ))}
            </ul>
          </nav>

          <ThemeSwitcher />

          <button
            aria-label='Открыть меню навигации'
            className='burger-button visible-mobile'
            onClick={openModal}
            type='button'>
            <span className='visually-hidden'>Open navigation menu</span>
          </button>

          <dialog className='mobile-overlay visible-mobile' id='mobileOverlay' ref={dialogRef}>
            <form className='mobile-overlay__close-button-wrapper' method='dialog'>
              <button className='mobile-overlay__close-button cross-button' type='submit'>
                <span className='visually-hidden'>Close navigation menu</span>
              </button>
            </form>

            <div className='mobile-overlay__body'>
              <ul className='mobile-overlay__list'>
                {anchors.map(({ title, anchor }) => (
                  <li className='mobile-overlay__item' key={anchor}>
                    <NavLink
                      label={title}
                      onClick={() => {
                        scrollToSection(anchor);
                        closeModal();
                      }}
                    />
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