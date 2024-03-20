import './styles.css';
import { projectsData } from './data';
import Title from '../title/index.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { forwardRef, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout-data/index.jsx';
import ArrowIcon from '../arrow-icon-circle/index.jsx';

gsap.registerPlugin(ScrollTrigger);

const Projects = forwardRef((props, ref) => {
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
    <section className='wrapper' id='content'>
      <div className='title__container' ref={ref}>
        <Title text='Projects' />
      </div>

      <section className='projects__container'>
        {projectsData.map((project) => {
          return (
            <div className='project__item' key={project.id} ref={addtoRefs}>
              <div className='project__description'>
                <Layout data={project} />
                <Link to={`/project/${project.path}`}>
                  <div className='project__details'>
                    <ArrowIcon />
                    Посмотреть детали
                  </div>
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
});
Projects.displayName = 'Projects';
export default Projects;
