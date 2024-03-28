import '../../styles/styles.scss';

import Title from '../title/index.jsx';
import Contacts from '../contacts/index.jsx';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__inner container'>
        <div className='footer__title'>
          <Title text='Follow me' />
        </div>
        <Contacts />
      </div>
    </footer>
  );
}

export default Footer;
