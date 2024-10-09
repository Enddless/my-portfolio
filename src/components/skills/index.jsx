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
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
          {skillsData.map((item) => {
            return (
              <div ref={refIcons} key={item.name} className='skills__icons-wrapper'>
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  loading='lazy'
                  width={40}
                  height={40}
                />
                <span className='skills__icons-name'>{item.name}</span>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Skills;
