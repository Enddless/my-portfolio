import HtmlIcon from 'public/icons/html5.svg';
import CssIcon from 'public/icons/css3.svg';
import JsIcon from 'public/icons/javascript.svg';
import SassIcon from 'public/icons/sass.svg';
import ReactIcon from 'public/icons/react.svg';
import TsIcon from 'public/icons/typescript.svg';
import ReduxIcon from 'public/icons/redux.svg';
import NpmIcon from 'public/icons/npm.svg';
import GitlubIcon from 'public/icons/gitlab.svg';
import Githubcon from 'public/icons/github.svg';
import MuiIcon from 'public/icons/materialui.svg';
import FigmaIcon from 'public/icons/figma.svg';
import FirebaseIcon from 'public/icons/firebase.svg';
import Title from '../title/index.jsx';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
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
        trigger: '.skills__icons',
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
    <section className='section skills' id='Skills'>
      <div className='skills__inner container'>
        <div className='skills__title'>
          <Title text='Skills' />
        </div>

        <section className='skills__icons'>
          <h3 className='visually-hidden'>Skills icons</h3>
          {arrayIcons.map((item) => {
            return (
              <img
                src={item}
                alt='skill icon'
                key={item}
                ref={refIcons}
                loading='lazy'
                width={40}
                height={40}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Skills;
