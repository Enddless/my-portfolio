import { useState } from 'react';
import Button from '../button/index.jsx';
import LinkButton from '../link-button/index.jsx';

function Card({ project, expandedProjectId, setExpandedProjectId, isProjectsList }) {
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

  return (
    <>
      <div
        className={`projects__item-content ${isProjectsList && 'react__item-content'}'`}>
        <p className='projects__item-content-name'>{project.name}</p>
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
            {project.deploy !== '' && <LinkButton text='Deploy' href={project.deploy} />}
            {project.github !== '' && <LinkButton text='Github' href={project.github} />}
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
            />
          )}
        </>
      )}
    </>
  );
}

export default Card;
