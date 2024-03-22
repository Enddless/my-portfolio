import '../../styles/styles.scss';
import Title from '../title/index.jsx';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ComponentCard from '../component-card/index.jsx';
import { useSelector } from 'react-redux';

gsap.registerPlugin(ScrollTrigger);

const ComponentsBlock = () => {
  const componentsData = useSelector((state) => state.portfolioData.components);
  const [components, setComponents] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (componentsData) {
      setComponents(componentsData);
      setDataLoaded(true); // Устанавливаем флаг загрузки данных в true
    }
  }, [componentsData]);

  const refs = useRef([]);
  refs.current = [];

  useEffect(() => {
    if (dataLoaded) {
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
              start: 'top bottom',
              end: '-=250',
              toggleActions: 'play none none reverse',
              scrub: 0.2
            }
          }
        );
      });
    }
  }, [dataLoaded]);

  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  if (!components) {
    return false;
  }

  return (
    <section className='components' id='components'>
      <div className='components__inner'>
        <div className='components__title'>
          <Title text='Components' />
        </div>
        <section className='components__list component'>
          {components.map((project) => {
            return (
              <div className='component__item' key={project.id} ref={addtoRefs}>
                <ComponentCard project={project} />
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default ComponentsBlock;
