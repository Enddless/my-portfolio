import '../../styles/styles.scss';
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

  useEffect(() => {
    if (componentsData.length) {
      setComponents(componentsData);
      setDataLoaded(true); // Устанавливаем флаг загрузки данных в true
    }
  }, [componentsData]);

  const refs = useRef([]);
  refs.current = [];

  useGsapOptions({ refs, dataLoaded, options: components.length });

  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  if (!components) {
    return false;
  }

  return (
    <section className='components container' id='components'>
      <div className='components__inner'>
        <div className='components__title'>
          <Title text='Components' />
        </div>
        {!dataLoaded && !components.length ? (
          <Spinner />
        ) : (
          <section className='components__list component'>
            {components.map((project) => {
              return (
                <div className='component__item' key={project.id} ref={addtoRefs}>
                  <ComponentCard project={project} />
                </div>
              );
            })}
          </section>
        )}
      </div>
    </section>
  );
};

export default ComponentsBlock;
