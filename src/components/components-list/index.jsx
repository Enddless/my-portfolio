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

  return (
    <section className='components' id='components'>
      <div className='components__inner  container'>
        <div className='components__title'>
          <Title text='Components' />
        </div>

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
      </div>
    </section>
  );
};

export default ComponentsBlock;
