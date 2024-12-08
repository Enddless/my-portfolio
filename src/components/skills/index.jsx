import HtmlIcon from 'public/icons/html5.svg';
import CssIcon from 'public/icons/css3.svg';
import JsIcon from 'public/icons/javascript.svg';
import SassIcon from 'public/icons/sass.svg';
import ReactIcon from 'public/icons/react.svg';
import TsIcon from 'public/icons/typescript.svg';
import ReduxIcon from 'public/icons/redux.svg';
import NpmIcon from 'public/icons/npm.svg';
import GitlubIcon from 'public/icons/gitlab.svg';
import Githubicon from 'public/icons/github.svg';
import MuiIcon from 'public/icons/materialui.svg';
import FigmaIcon from 'public/icons/figma.svg';
import FirebaseIcon from 'public/icons/firebase.svg';
import Title from '../title/index.jsx';

const Skills = () => {
  const skillsData = [
    {
      icon: `${HtmlIcon}`,
      name: ' Html'
    },
    {
      icon: `${CssIcon}`,
      name: ' Css'
    },
    {
      icon: `${SassIcon}`,
      name: ' Sass'
    },
    {
      icon: `${JsIcon}`,
      name: ' Javascript'
    },
    {
      icon: `${ReactIcon}`,
      name: ' React'
    },
    {
      icon: `${TsIcon}`,
      name: ' Typescript'
    },
    {
      icon: `${ReduxIcon}`,
      name: ' Redux'
    },
    {
      icon: `${NpmIcon}`,
      name: ' Npm'
    },
    {
      icon: `${GitlubIcon}`,
      name: ' Gitlub'
    },
    {
      icon: `${Githubicon}`,
      name: ' Github'
    },
    {
      icon: `${MuiIcon}`,
      name: 'Mui'
    },
    {
      icon: `${FigmaIcon}`,
      name: 'Figma'
    },
    {
      icon: `${FirebaseIcon}`,
      name: 'Firebase'
    }
  ];

  return (
    <section className='section skills' id='Skills'>
      <div className='skills__inner container'>
        <div className='skills__title'>
          <Title text='Skills' />
        </div>

        <div className='skills__icons'>
          <h3 className='visually-hidden'>Skills icons</h3>
          <ul className='skills__list'>
            {skillsData.map((item) => {
              return (
                <li key={item.name}>
                  <div className='skills__icons-wrapper'>
                    <img
                      src={item.icon}
                      alt={`это иконка ${item.name}`}
                      loading='lazy'
                      width={40}
                      height={40}
                      style={{
                        filter: 'saturate(10%)'
                      }}
                    />

                    <span className='skills__icons-name'>{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
{
  /* <img
                            src={offer.bankLogo}
                            alt='bank logo'
                            style={
                              offer.bankName === 'Банк ДОМ.РФ'
                                ? {
                                    filter:
                                      'invert(39%) sepia(66%) saturate(233%) hue-rotate(90deg)'
                                  }
                                : {}
                            }
                          /> */
}
