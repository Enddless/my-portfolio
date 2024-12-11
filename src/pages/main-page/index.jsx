import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';

const ProjectsList = React.lazy(() => import('../../components/projects-list/index.jsx'));

function MainPage() {
  const { projects, isLoading } = useGetAllProjects();
  const { layouts, isLoadingLayouts } = useGetAllLayouts();

  const [projectList, setProjectList] = useState();
  const [layoutsList, setLayoutList] = useState();
  useEffect(() => {
    if (projects.length) {
      setProjectList(projects);
    }
  }, [projects]);
  useEffect(() => {
    if (layouts.length) {
      setLayoutList(layouts);
    }
  }, [layouts]);
  return (
    <>
      <div className='lead__overlay' id='About'>
        <Header />
        <Lead />
      </div>

      <div className='main__content'>
        <Skills />
        <ProjectsList
          projectsList={layoutsList}
          id='Landings'
          isLoading={isLoadingLayouts}
        />
        <ProjectsList
          projectsList={projectList}
          id='React_projects'
          isLoading={isLoading}
        />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
