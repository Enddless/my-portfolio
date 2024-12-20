import Title from '../title/index.jsx';
import Contacts from '../contacts/index.jsx';
import Snow from '../snow/index.jsx';

function Footer() {
  return (
    <footer className='footer'>
      <Snow />
      <div className='footer__inner container'>
        <div className='footer__title'>
          <Title text='Contacts  me' />
        </div>
        <Contacts />
      </div>
    </footer>
  );
}

export default Footer;
