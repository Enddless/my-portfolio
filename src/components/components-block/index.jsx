import './styles.css';
import Title from '../title/index.jsx';
import { componentsData } from './data.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Layout from '../layout-data/index.jsx';

gsap.registerPlugin(ScrollTrigger);

const ComponentsBlock = forwardRef((props, ref) => {
  const refs = useRef([]);
  refs.current = [];

  useEffect(() => {
    refs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: '120'
        },
        {
          autoAlpha: 1,
          y: '0',
          duration: 1,
          scrollTrigger: {
            trigger: el,
            // start: 'top bottom-=50',
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            end: '-=250', // end after scrolling 500px beyond the start
            toggleActions: 'play none none reverse',
            scrub: 0.2
            // markers: true
          }
        }
      );
    });
  }, []);
  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <section className='wrapper' id='components'>
      <div className='title__container' ref={ref}>
        <Title text='Components' />
      </div>
      <section className='components__container'>
        {componentsData.map((project) => {
          return (
            <div className='component__item' key={project.id} ref={addtoRefs}>
              <div className='overlay'></div>
              <div className='component__description'>
                <img src={project.image} alt='photo project' height='550px' />
                <Layout data={project} />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
});
ComponentsBlock.displayName = 'ComponentsBlock';
export default ComponentsBlock;
