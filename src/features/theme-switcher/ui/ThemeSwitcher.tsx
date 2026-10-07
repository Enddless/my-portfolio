import { useColorScheme } from '@/shared/lib/useColorScheme';
import Icon from '@/shared/ui/Icon';

import './ThemeSwitcher.scss';

function ThemeSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='theme-switcher'>
      <label className='theme-switcher__label'>
        <span className='visually-hidden'>Переключить тему</span>
        <input
          checked={colorScheme === 'dark'}
          className='theme-switcher__checkbox visually-hidden'
          onChange={toggleColorScheme}
          type='checkbox'
        />
        <span className='theme-switcher__body' title='Переключить тему'>
          <span
            className={
              colorScheme === 'dark'
                ? 'theme-switcher__icon-wrapper theme-switcher__icon-wrapper--active'
                : 'theme-switcher__icon-wrapper'
            }>
            <Icon name='moon' />
          </span>
          <span
            className={
              colorScheme === 'light'
                ? 'theme-switcher__icon-wrapper theme-switcher__icon-wrapper--active'
                : 'theme-switcher__icon-wrapper'
            }>
            <Icon name='sun' />
          </span>
        </span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;