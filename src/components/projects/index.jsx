import '../../styles/styles.scss';
import Title from '../title/index.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../project-card/index.jsx';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/index.jsx';
import useGsapOptions from '../../hooks/useGsapOptions.jsx';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsData = useSelector((state) => state.portfolioData.projects);
  const [projects, setProjects] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (projectsData.length) {
      setProjects(projectsData);
      setDataLoaded(true);
    }
  }, [projectsData]);

  const refs = useRef([]);
  refs.current = [];

  useGsapOptions({ refs, dataLoaded, options: projects.length });

  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <section className='projects' id='content'>
      <div className='projects__inner  container'>
        <div className='projects__title'>
          <Title text='Projects' />
        </div>

        {!dataLoaded && !projects.length ? (
          <Spinner />
        ) : (
          <ul className='projects__list project'>
            {projects.map((project) => {
              return (
                <li className='project__item' key={project.id} ref={addtoRefs}>
                  <ProjectCard project={project} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Projects;
