import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Projects from '../../components/projects/index.jsx';
import ComponentsBlock from '../../components/components-block/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllComponents from '../../hooks/useGetAllComponents.jsx';
import '../../styles/styles.scss';

function MainPage() {
  window.scrollTo(0, 0);
  useGetAllProjects();
  useGetAllComponents();
  return (
    <>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>
      <div className='content__wrapper'>
        <div className='main__content'>
          <Skills />
          <Projects />
        </div>
        <ComponentsBlock />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
