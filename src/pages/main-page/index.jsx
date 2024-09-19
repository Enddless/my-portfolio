import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import ComponentsBlock from '../../components/components-list/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllComponents from '../../hooks/useGetAllComponents.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';
import ProjectsList from '../../components/projects-list/index.jsx';

function MainPage() {
  const { data: layoutsData } = useGetAllLayouts();
  const { data: projectsData } = useGetAllProjects();
  const { data: componentsData } = useGetAllComponents();

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
        <ComponentsBlock componentsData={componentsData} />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
