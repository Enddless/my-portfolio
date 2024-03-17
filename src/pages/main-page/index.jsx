import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Projects from '../../components/projects/index.jsx';
import ComponentsBlock from '../../components/components-block/index.jsx';
import Footer from '../../components/footer/index.jsx';
import './styles.css';
import Info from '../../components/info/index.jsx';
import { useRef } from 'react';
import { useEffect } from 'react';

function MainPage() {
  const refFullContent = useRef(null);
  const refSkills = useRef(null);
  const refProjects = useRef(null);
  const refComponents = useRef(null);
  useEffect(() => {
    const createLineToSection = (section) => {
      const line = document.createElement('div');
      line.classList.add('line-to-section');
      const lineHeight = section.current.offsetTop;
      line.style.height = `${lineHeight}px`;
      section.current.appendChild(line);
    };

    createLineToSection(refSkills);
    createLineToSection(refProjects);
    createLineToSection(refComponents);
  }, []);
  return (
    <>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>
      <div className='content__wrapper' ref={refFullContent}>
        <div className='main__content'>
          <Info />
          <Skills ref={refSkills} />
          <Projects ref={refProjects} />
        </div>
        <ComponentsBlock ref={refComponents} />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
