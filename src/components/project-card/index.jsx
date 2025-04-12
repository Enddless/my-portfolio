import { useContext, useState } from 'react';
import Button from '../button/index.jsx';
import LinkButton from '../link-button/index.jsx';
import { IdProjectContext } from '../../context/id-project-click.jsx';
import { ThemeContext } from '../../context/index.jsx';

function Card({
  project,
  expandedProjectId,
  setExpandedProjectId,
  isProjectsList,
  openModal
}) {
  const stackArray = project.stack.split(', ').map((item) => item.trim());

  const toggleExpand = (projectId) => {
    setExpandedProjectId(
      (prevIds) =>
        prevIds.includes(projectId)
          ? prevIds.filter((id) => id !== projectId) // Если проект уже развернут, убираем его из массива
          : [...prevIds, projectId] // Иначе добавляем его в массив
    );
    // Прокручиваем до начала элемента, если была нажата кнопка "свернуть"
    if (expandedProjectId.includes(projectId)) {
      const element = document.getElementById(projectId); // Используем getElementById
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const { setIdProject } = useContext(IdProjectContext);
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`projects__item-content ${isProjectsList && 'react__item-content'}'`}>
        <div className='projects__item-content-name'>
          <p>{project.name}</p>
        </div>

        <img
          src={project.preview}
          alt={`это ${project.alt}`}
          loading='lazy'
          decoding='async'
          onLoad={handleImageLoad}
        />
      </div>
      {imagesLoaded && (
        <>
          <div
            className={`projects__item-content-links ${isProjectsList && 'react__item-content-links'}`}>
            <span
              onClick={() => {
                if (project.id !== 'pr11') {
                  openModal();
                  setIdProject(project.id);
                }
              }}>
              {project.id !== 'pr11' && (
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='link'>
                  <path
                    d='M0.5 8.5C0.5 4.72876 0.5 2.84315 1.67157 1.67157C2.84315 0.5 4.72876 0.5 8.5 0.5H13.5C17.2712 0.5 19.1569 0.5 20.3284 1.67157C21.5 2.84315 21.5 4.72876 21.5 8.5V13.5C21.5 17.2712 21.5 19.1569 20.3284 20.3284C19.1569 21.5 17.2712 21.5 13.5 21.5H8.5C4.72876 21.5 2.84315 21.5 1.67157 20.3284C0.5 19.1569 0.5 17.2712 0.5 13.5V8.5Z'
                    style={{ stroke: isDarkTheme === 'dark' ? 'white' : '#191717' }}
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.4997 14.1258L18.7045 13.3306L18.6814 13.3075L18.6814 13.3075C18.1041 12.7302 17.6388 12.2648 17.2247 11.9403C16.796 11.6043 16.3709 11.3767 15.8666 11.3363C15.7335 11.3256 15.5998 11.3256 15.4667 11.3363C14.9625 11.3767 14.5373 11.6043 14.1086 11.9403C13.6946 12.2648 13.2292 12.7302 12.6519 13.3075L12.6519 13.3075L12.6288 13.3306C12.1954 13.764 11.9056 14.0523 11.6686 14.2335C11.437 14.4104 11.3405 14.4174 11.292 14.4129C11.2589 14.4099 11.2263 14.4036 11.1945 14.3942C11.1478 14.3803 11.0608 14.338 10.9115 14.0877C10.7587 13.8315 10.5967 13.4561 10.3552 12.8927L10.2869 12.7333L10.2697 12.6933C9.75707 11.497 9.34987 10.5469 8.93666 9.87524C8.51346 9.18739 8.02207 8.68744 7.29814 8.54802C6.57421 8.40861 5.93229 8.6903 5.2839 9.17179C4.65081 9.64191 3.91984 10.3729 2.99957 11.2932L2.96877 11.324L2.5 11.7928V13.207L3.67587 12.0311C4.6339 11.0731 5.3133 10.3955 5.88008 9.97463C6.43861 9.55988 6.79091 9.46871 7.10903 9.52998C7.42716 9.59124 7.7204 9.80673 8.08495 10.3993C8.45488 11.0005 8.83405 11.8819 9.36775 13.1272L9.43607 13.2866L9.45006 13.3193L9.45007 13.3193C9.67379 13.8414 9.86147 14.2794 10.0526 14.5999C10.2513 14.933 10.5066 15.2326 10.9088 15.3525C11.0042 15.3809 11.1022 15.3998 11.2013 15.4088C11.6193 15.4469 11.9676 15.2635 12.2758 15.028C12.5723 14.8014 12.9092 14.4645 13.3108 14.0628L13.3359 14.0377C13.9417 13.4319 14.3647 13.0101 14.7255 12.7274C15.077 12.4518 15.3172 12.3515 15.5467 12.3331C15.6266 12.3267 15.7068 12.3267 15.7866 12.3331C16.0161 12.3515 16.2563 12.4518 16.6079 12.7274C16.9686 13.0101 17.3916 13.4319 17.9974 14.0377L19.4904 15.5307C19.4968 15.111 19.499 14.6456 19.4997 14.1258Z'
                    style={{ stroke: isDarkTheme === 'dark' ? 'white' : '#191717' }}
                  />
                  <circle
                    cx='16.25'
                    cy='5.75'
                    r='1.75'
                    style={{ stroke: isDarkTheme === 'dark' ? 'white' : '#191717' }}
                  />
                </svg>
              )}
            </span>

            {project.deploy !== '' && <LinkButton id='Deploy' href={project.deploy} />}
            {project.github !== '' && <LinkButton id='Github' href={project.github} />}
          </div>
          <div
            className={`projects__item-content-stack ${isProjectsList && 'react__item-content-stack'}`}>
            {stackArray.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          {!isProjectsList && (
            <Button
              text={expandedProjectId.includes(project.id) ? 'Свернуть' : 'Развернуть'}
              onClick={() => toggleExpand(project.id)}
              cls={expandedProjectId.includes(project.id) ? 'button-expanded' : ''}
            />
          )}
        </>
      )}
    </>
  );
}

export default Card;
