import arrow from '../../assets/svg/arrow-top-right.svg';
import './styles.css';

function ButtonDetails({ text }) {
  return (
    <div className='button-container'>
      {text} <img src={arrow} width={22} height={20}></img>
    </div>
  );
}

export default ButtonDetails;
