import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import ComponentsBlock from '../../components/components-list/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllComponents from '../../hooks/useGetAllComponents.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';
import ProjectsList from '../../components/projects-list/index.jsx';
import { useSelector } from 'react-redux';

function MainPage() {
  // const { data: layoutsData, error } = useGetAllLayouts();
  // const { data: projectsData } = useGetAllProjects();
  // const { data: componentsData } = useGetAllComponents();

  // if (error) return <p>Ошибка: {error.message}</p>;

  useGetAllLayouts();
  useGetAllProjects();
  useGetAllComponents();
  const projectsData = useSelector((state) => state.portfolioData.projects);
  const layoutsData = useSelector((state) => state.portfolioData.layouts);

  return (
    <>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>

      <div className='main__content '>
        <Skills />
        <ProjectsList projectsList={layoutsData} id='Layouts' />
        <ProjectsList projectsList={projectsData} id='Projects' />
        <ComponentsBlock />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
