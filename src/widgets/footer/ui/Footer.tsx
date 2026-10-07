import { Logo } from '@/shared/ui';

import './Footer.scss';

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__inner container'>
        <Logo className='footer__logo' />

        <p className='footer__copyright'>
          © {CURRENT_YEAR} Diana Ivashchenko. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;