import Title from '../title/index.jsx';
import { useEffect, useRef, useState } from 'react';
import ComponentCard from '../component-card/index.jsx';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/index.jsx';
import useGsapOptions from '../../hooks/useGsapOptions.jsx';

const ComponentsBlock = () => {
  const componentsData = useSelector((state) => state.portfolioData.components);
  const [components, setComponents] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (componentsData.length) {
      setComponents(componentsData);
      setDataLoaded(true); // Устанавливаем флаг загрузки данных в true
    }
  }, [componentsData]);

  const refs = useRef([]);
  refs.current = [];

  useGsapOptions({ refs, dataLoaded, options: components.length, isOpen });

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
    <section className='section components' id='components'>
      <div className='components__inner  container'>
        <div className='components__title' onClick={toggleList}>
          <Title text='Components' />
          <div className={`toggle-icon ${isOpen ? 'open' : ''}`}>
            <div className='line line1'></div>
            <div className='line line2'></div>
          </div>
        </div>
        <div
          className={`projects__template ${isOpen ? 'projects__template--disabled' : ''} `}>
          <p>Здесь можно посмотреть небольшие компоненты</p>
        </div>

        {isOpen && (
          <>
            {!dataLoaded && !components.length ? (
              <Spinner />
            ) : (
              <ul className='components__list component'>
                {components.map((project) => {
                  return (
                    <li className='component__item' key={project.id} ref={addtoRefs}>
                      <ComponentCard project={project} />
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ComponentsBlock;
