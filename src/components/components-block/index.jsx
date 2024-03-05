import React from 'react';
import './styles.css';
import Title from '../title/index.jsx';
import Galery from '../slick-slider/index.jsx';
import { componentsData } from './data';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function Components() {
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    ref.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: (index + 1) % 2 === 0 ? '-70' : '70'
        },
        {
          autoAlpha: 1,
          x: '0',
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
            <div className='project__item' key={project.id} ref={addtoRefs}>
              <div className='project__description'>
                <div className='project__name'>
                  &lt;Component&gt;: <span>{project.name}</span>
                </div>
                <div className='project__text'>
                  &lt;About component&gt;: <span>{project.text}</span>
                </div>
                <div className='project__link'>
                  &lt;Deploy&gt;:
                  <span>
                    <a href={project.deploy}> here</a>
                  </span>
                </div>
                <div className='project__link'>
                  &lt;Github&gt;:
                  <span>
                    <a href={project.github}> here</a>
                  </span>
                </div>
                <div className='project__stack'>
                  &lt;Stack&gt;: <span>{project.stack}</span>
                </div>
              </div>
              <div className='project__photo'>
                <Galery images={project.images} />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Components;
