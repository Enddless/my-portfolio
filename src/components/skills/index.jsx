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
import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = forwardRef((props, ref) => {
  const arrayIcons = [
    `${HtmlIcon}`,
    `${CssIcon}`,
    `${JsIcon}`,
    `${SassIcon}`,
    `${ReactIcon}`,
    `${TsIcon}`,
    `${ReduxIcon}`,
    `${NpmIcon}`,
    `${GitlubIcon}`,
    `${Githubcon}`,
    `${MuiIcon}`,
    `${FigmaIcon}`,
    `${FirebaseIcon}`
  ];
  const refs = useRef([]);
  refs.current = [];

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.icon__container',
        start: 'top bottom', // when the top of the trigger hits the top of the viewport
        end: '-=250', // end after scrolling 500px beyond the start
        scrub: 0.2,
        // markers: true,
        snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
      }
    });

    // add animations and labels to the timeline
    refs.current.forEach((el) => {
      tl.from(el, { x: -90, autoAlpha: 0 }).to(el, { x: 0, autoAlpha: 0.9 });
    });
  }, []);
  const refIcons = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <section className='skills__container' id='skills'>
      <div className='title__container' ref={ref}>
        <Title text='Skills' />
      </div>
      <section className='icon__container'>
        {arrayIcons.map((item) => {
          return <img src={item} alt='icon' key={item} ref={refIcons} />;
        })}
      </section>
    </section>
  );
});
Skills.displayName = 'Skills';
export default Skills;
