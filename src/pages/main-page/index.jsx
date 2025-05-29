import React from 'react';
import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';

const ProjectsList = React.lazy(() => import('../../components/projects-list/index.jsx'));

function MainPage() {
  const { layouts, fetchLayouts } = useGetAllLayouts();
  const { projects, fetchProjects } = useGetAllProjects();

  // Проверка на наличие проектов для отображения
  const hasMoreLayouts = layouts.length % 6 === 0; // Если длина кратна 6, значит есть еще проекты
  const hasMoreProjects = projects.length % 4 === 0;

  return (
    <>
      <div className='lead__overlay' id='About'>
        <Header />
        <Lead />
      </div>

      <div className='main__content'>
        <ProjectsList projectsList={layouts} id='Landings' />
        {hasMoreLayouts && (
          <div className='main__content-show-more'>
            <button onClick={fetchLayouts} className='button button--show-more'>
              Show more
            </button>
          </div>
        )}
        <ProjectsList projectsList={projects} id='React_projects' />
        {hasMoreProjects && (
          <div className='main__content-show-more'>
            <button onClick={fetchProjects} className='button button--show-more'>
              Show more
            </button>
          </div>
        )}
        <Skills />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
