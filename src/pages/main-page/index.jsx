import React from 'react';
import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';
import { useSelector } from 'react-redux';

const ProjectsList = React.lazy(() => import('../../components/projects-list/index.jsx'));

function MainPage() {
  useGetAllLayouts();
  useGetAllProjects();

  const projectsData = useSelector((state) => state.portfolioData.projects);
  const layoutsData = useSelector((state) => state.portfolioData.layouts);

  return (
    <>
      <div className='lead__overlay' id='About'>
        <Header />
        <Lead />
      </div>

      <div className='main__content '>
        <ProjectsList projectsList={layoutsData} id='Landings' />
        <ProjectsList projectsList={projectsData} id='React_projects' />
        <Skills />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
