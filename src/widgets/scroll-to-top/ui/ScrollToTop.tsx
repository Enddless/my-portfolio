import { useEffect, useState } from 'react';

import { Icon } from '@/shared/ui';

import './ScrollToTop.scss';

const VISIBILITY_OFFSET = 400;

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_OFFSET);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label='Наверх'
      className={`scroll-to-top${isVisible ? ' scroll-to-top--visible' : ''}`}
      onClick={handleClick}
      type='button'>
      <Icon name='arrow-up' />
    </button>
  );
}

export default ScrollToTop;
