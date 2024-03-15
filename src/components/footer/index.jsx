import './styles.css';
import Title from '../title/index.jsx';
import Contacts from '../contacts/index.jsx';

function Footer() {
  return (
    <footer className='footer'>
      <div className='title__container'>
        <Title text='Follow me' />
      </div>
      <Contacts />
    </footer>
  );
}

export default Footer;
