import './styles.css';
import Title from '../title/index.jsx';
import { componentsData } from './data.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Layout from '../layout-data/index.jsx';

gsap.registerPlugin(ScrollTrigger);

function Components() {
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    ref.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: '90'
        },
        {
          autoAlpha: 1,
          y: '0',
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
            scrub: 0.2
          }
        }
      );
    });
  }, []);
  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  return (
    <section className='wrapper' id='components'>
      <div className='title__container'>
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
}

export default Components;
