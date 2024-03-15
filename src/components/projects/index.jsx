import React from 'react';
import './styles.css';
import { projectsData } from './data';
import Title from '../title/index.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout-data/index.jsx';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
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
    <section className='wrapper' id='content'>
      <div className='title__container'>
        <Title text='Projects' />
      </div>

      <section className='projects__container'>
        {projectsData.map((project) => {
          return (
            <div className='project__item' key={project.id} ref={addtoRefs}>
              <div className='project__description'>
                <Layout data={project} />
                <Link to={`/project/${project.path}`}>
                  <span className='project__details'>Подробнее</span>
                </Link>
              </div>
              <div className='project__photo'>
                <img src={project.mainPhoto} alt='photo project' height='550px' />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
