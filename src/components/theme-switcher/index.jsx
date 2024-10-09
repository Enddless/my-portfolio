import { useContext } from 'react';
import { ThemeContext } from '../../context';

function ThemeSwitcher() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <div className='header__theme'>
      <label className='header__theme-switcher theme-switcher'>
        <span className='visually-hidden'>Switch theme</span>
        <input
          className='theme-switcher__checkbox visually-hidden'
          type='checkbox'
          checked={isDarkTheme === 'dark'}
          readOnly
        />
        <span className='theme-switcher__body' title='Switch theme'>
          <span
            className={`theme-switcher__icon-wrapper theme-switcher__icon-wrapper--dark-theme ${isDarkTheme === 'dark' ? 'active' : ''}`}>
            <svg
              className='i-icon icon-moon'
              viewBox='0 0 20 20'
              onClick={() => setIsDarkTheme('dark')}>
              <path
                d='M14.06 12.991a5.487 5.487 0 0 1-4.174-1.611A5.487 5.487 0 0 1 8.27 7.475c0-.841.187-1.652.537-2.386a5.46 5.46 0 0 1 .562-.922c-.385.04-.754.121-1.114.233a5.855 5.855 0 0 0-4.088 5.582 5.85 5.85 0 0 0 10.957 2.852 5.204 5.204 0 0 1-1.064.157Z'
                fill='#191820'></path>
            </svg>
          </span>
          <span
            className={`theme-switcher__icon-wrapper theme-switcher__icon-wrapper--light-theme ${isDarkTheme === 'light' ? 'active' : ''}`}>
            <svg
              className='i-icon icon-sun'
              viewBox='0 0 20 20'
              onClick={() => setIsDarkTheme('light')}>
              <path
                d='M9.994 2.502a.463.463 0 0 0-.059.015.468.468 0 0 0-.365.468V4.39a.468.468 0 1 0 .936 0V2.985a.468.468 0 0 0-.512-.483ZM5.019 4.565a.469.469 0 0 0-.278.805l.98.995a.476.476 0 0 0 .674-.673l-.995-.98a.468.468 0 0 0-.381-.147Zm9.935 0a.469.469 0 0 0-.278.147l-.995.98a.476.476 0 0 0 .673.674l.98-.995a.468.468 0 0 0-.336-.805h-.044Zm-4.916 1.697a3.757 3.757 0 0 0-3.746 3.746 3.757 3.757 0 0 0 3.746 3.746 3.757 3.757 0 0 0 3.746-3.746 3.757 3.757 0 0 0-3.746-3.746ZM2.926 9.54a.47.47 0 1 0 .088.937H4.42a.468.468 0 1 0 0-.937H2.926Zm12.643 0a.47.47 0 1 0 .087.937h1.405a.468.468 0 1 0 0-.937H15.57Zm-1.595 3.966a.469.469 0 0 0-.059.014.468.468 0 0 0-.234.805l.995.98a.468.468 0 1 0 .658-.658l-.98-.995a.468.468 0 0 0-.38-.146Zm-7.975.014a.468.468 0 0 0-.278.132l-.98.995a.468.468 0 1 0 .658.658l.995-.98A.469.469 0 0 0 6 13.52Zm3.995 1.624a.466.466 0 0 0-.059.015.468.468 0 0 0-.366.468v1.405a.468.468 0 1 0 .937 0v-1.405a.468.468 0 0 0-.512-.483Z'
                fill='#fff'></path>
            </svg>
          </span>
        </span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
