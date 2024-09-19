import Title from '../title/index.jsx';
import { useEffect, useRef, useState } from 'react';
import Spinner from '../spinner/index.jsx';
import useGsapOptions from '../../hooks/useGsapOptions.jsx';
import Card from '../project-card/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';

const ProjectsList = ({ projectsList, id }) => {
  const { isLoading } = useGetAllProjects();
  const isLayoutsList = id === 'Layouts';
  const isProjectsList = id === 'Projects';
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(isLayoutsList || isProjectsList);

  useEffect(() => {
    if (projectsList) {
      setProjects(projectsList);
    }
  }, [projectsList]);

  const refs = useRef([]);
  refs.current = [];

  useGsapOptions({ refs, dataLoaded: !isLoading, options: projects.length, isOpen });

  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const toggleList = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      refs.current = [];
    }
  };

  return (
    <section className='section projects' id={id}>
      <div className='projects__inner container'>
        <div className='projects__title' onClick={toggleList}>
          <Title text={id} />
          <div className={`toggle-icon ${isOpen ? 'open' : ''}`}>
            <div className='line line1'></div>
            <div className='line line2'></div>
          </div>
        </div>

        <div
          className={`projects__template ${isOpen ? 'projects__template--disabled' : ''}`}>
          <p>
            {isLayoutsList
              ? 'Здесь можно посмотреть свёрстанные проекты'
              : 'Здесь можно посмотреть проекты, разработанные на React'}
          </p>
        </div>

        {isOpen && (
          <>
            {isLoading && !projects.length ? (
              <Spinner />
            ) : (
              <ul className='projects__list project'>
                {projects.map((project) => (
                  <li
                    id={project.path}
                    className='project__item grid grid--12'
                    key={project.id}
                    ref={addtoRefs}>
                    <Card project={project} />
                    {project.video && (
                      <div className='project__item-video'>
                        <video width='100%' controls>
                          <source src={project.video} type='video/mp4' />
                          Ваш браузер не поддерживает видео.
                        </video>
                      </div>
                    )}
                    {project.comments && (
                      <div className='project__item-note'>
                        Comment:
                        <p>{project.comments}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
