import Title from '../title/index.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import Spinner from '../spinner/index.jsx';
import useGsapOptions from '../../hooks/useGsapOptions.jsx';
import Card from '../project-card/index.jsx';
import Gallery from '../gallery/index.jsx';
import { IdProjectContext } from '../../context/id-project-click.jsx';

const ProjectsList = ({ projectsList, id }) => {
  const isLayoutsList = id === 'Landings';
  const isProjectsList = id === 'React_projects';
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(isLayoutsList || isProjectsList);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [listCount, setListCount] = useState(3); // По умолчанию 3 списка
  const [expandedProjectId, setExpandedProjectId] = useState([]); // Для отслеживания развернутого проекта
  const { setIdProject } = useContext(IdProjectContext);
  const refModal = useRef();

  useEffect(() => {
    if (projectsList.length) {
      setProjects(projectsList);
      setDataLoaded(true);
    }
  }, [projectsList]);

  const refs = useRef([]);
  refs.current = [];

  // useGsapOptions({ refs, dataLoaded, options: projects.length, isOpen });

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

  useEffect(() => {
    const handleResize = () => {
      setListCount(window.innerWidth < 767 ? 2 : 3);
    };

    handleResize(); // Устанавливаем начальное значение
    window.addEventListener('resize', handleResize); // Добавляем обработчик события

    return () => {
      window.removeEventListener('resize', handleResize); // Удаляем обработчик
    };
  }, []);

  // Функция для разбивки массива на заданное количество групп
  const distributeProjectsIntoLists = (array, count) => {
    const result = Array.from({ length: count }, () => []);
    array.forEach((project, index) => {
      result[index % count].push(project);
    });
    return result;
  };

  // Разбиваем массив проектов на заданное количество групп
  const projectGroups = distributeProjectsIntoLists(projects, listCount);

  const openModal = () => {
    refModal.current.showModal();
  };

  const closeModal = () => {
    refModal.current.close();
    setIdProject('');
  };

  return (
    <section className='section projects' id={id}>
      <div className='projects__inner container'>
        <div className='projects__title' onClick={toggleList}>
          <Title text={isProjectsList ? 'React projects' : id} />
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
            {!dataLoaded && !projects.length ? (
              <Spinner />
            ) : !isProjectsList ? (
              <div className='projects__wrapper'>
                {projectGroups.map((group, index) => (
                  <ul className='projects__list' key={index}>
                    {group.map((project) => {
                      return (
                        <li
                          id={project.id}
                          className={`projects__item  ${expandedProjectId.includes(project.id) ? 'projects__item-expanded' : ''} `}
                          key={project.id}
                          ref={addtoRefs}>
                          <Card
                            project={project}
                            expandedProjectId={expandedProjectId}
                            setExpandedProjectId={setExpandedProjectId}
                            openModal={openModal}
                          />
                        </li>
                      );
                    })}
                  </ul>
                ))}
              </div>
            ) : (
              <ul
                className={`projects__list ${isProjectsList && 'react__list grid grid--12'}`}>
                {projects.map((project) => (
                  <li
                    id={project.id}
                    className={`projects__item  ${expandedProjectId.includes(project.id) ? 'projects__item-expanded' : ''} ${isProjectsList && 'react__item'}`}
                    key={project.id}
                    ref={addtoRefs}>
                    <Card
                      project={project}
                      expandedProjectId={expandedProjectId}
                      setExpandedProjectId={setExpandedProjectId}
                      isProjectsList={isProjectsList}
                      openModal={openModal}
                    />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        <dialog className='mobile-overlay gallery-page' ref={refModal}>
          <Gallery projectsList={projectsList} closeModal={closeModal} />
        </dialog>
      </div>
    </section>
  );
};

export default ProjectsList;
