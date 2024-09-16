import '../../styles/styles.scss';
import Title from '../title/index.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import Spinner from '../spinner/index.jsx';
import useGsapOptions from '../../hooks/useGsapOptions.jsx';
import Card from '../project-card/index.jsx';

gsap.registerPlugin(ScrollTrigger);

const ProjectsList = ({ projectsList, id }) => {
  const isLayoutsList = id === 'layout';
  const [projects, setProjects] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (projectsList.length) {
      setProjects(projectsList);
      setDataLoaded(true);
    }
  }, [projectsList]);

  const refs = useRef([]);
  refs.current = [];

  useGsapOptions({ refs, dataLoaded, options: projects.length });

  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  // прокрутка до элемента, если переход сразу на хэшссылку
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Убираем '#'
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section className='projects' id={isLayoutsList ? 'layouts' : 'projects'}>
      <div className='projects__inner  container'>
        <div className='projects__title '>
          <Title text={isLayoutsList ? 'Layouts' : 'Projects'} />
        </div>

        {!dataLoaded && !projects.length ? (
          <Spinner />
        ) : (
          <ul className='projects__list project'>
            {projects.map((project) => {
              return (
                <li
                  id={project.path}
                  className='project__item grid grid--12'
                  key={project.id}
                  ref={addtoRefs}>
                  <Card project={project} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
