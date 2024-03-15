import './styles.css';
import HtmlIcon from '../../assets/svg/html5.svg';
import CssIcon from '../../assets/svg/css3.svg';
import JsIcon from '../../assets/svg/javascript.svg';
import SassIcon from '../../assets/svg/sass.svg';
import ReactIcon from '../../assets/svg/react.svg';
import TsIcon from '../../assets/svg/typescript.svg';
import ReduxIcon from '../../assets/svg/redux.svg';
import NpmIcon from '../../assets/svg/npm.svg';
import GitlubIcon from '../../assets/svg/gitlab.svg';
import Githubcon from '../../assets/svg/github.svg';
import MuiIcon from '../../assets/svg/materialui.svg';
import FigmaIcon from '../../assets/svg/figma.svg';
import FirebaseIcon from '../../assets/svg/firebase.svg';
import Title from '../title/index.jsx';

function Skills() {
  return (
    <section className='skills__container' id='skills'>
      <div className='title__container'>
        <Title text='Skills' />
      </div>
      <section className='icon__container'>
        <img src={HtmlIcon} alt='HTML' />
        <img src={CssIcon} alt='CSS' />
        <img src={JsIcon} alt='JavaScript' />
        <img src={SassIcon} alt='Sass' />
        <img src={ReactIcon} alt='React' />
        <img src={TsIcon} alt='TypeScript' />
        <img src={ReduxIcon} alt='Redux' />
        <img src={NpmIcon} alt='NPM' />
        <img src={GitlubIcon} alt='GitLab' />
        <img src={Githubcon} alt='GitHub' />
        <img src={MuiIcon} alt='Material UI' />
        <img src={FigmaIcon} alt='Figma' />
        <img src={FirebaseIcon} alt='Firebase' />
      </section>
    </section>
  );
}

export default Skills;
