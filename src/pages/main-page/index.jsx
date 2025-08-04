import React, { useState } from 'react';
import Header from '../../components/header/index.jsx';
import Lead from '../../components/lead/index.jsx';
import Skills from '../../components/skills/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';

const ProjectsList = React.lazy(() => import('../../components/projects-list/index.jsx'));

function MainPage() {
  const { layouts } = useGetAllLayouts();
  const { projects } = useGetAllProjects();

  // Количество показываемых карточек
  const [layoutsToShow, setLayoutsToShow] = useState(6);

  // Общее количество данных
  const totalLayouts = layouts.length;

  // Отображаем только нужное количество элементов
  const displayedLayouts = layouts.slice(0, layoutsToShow);

  // Проверка есть ли еще что показывать
  const hasMoreLayouts = layoutsToShow < totalLayouts;

  // Обработчики для кнопок "Показать еще"
  const handleShowMoreLayouts = () => {
    setLayoutsToShow((prev) => Math.min(prev + 6, totalLayouts));
  };

  return (
    <>
      <div className='lead__overlay' id='About'>
        <Header />
        <Lead />
      </div>

      <div className='main__content'>
        {/* Показываем только нужное количество карточек */}
        <ProjectsList projectsList={displayedLayouts} id='Landings' />
        {hasMoreLayouts && (
          <div className='main__content-show-more'>
            <button onClick={handleShowMoreLayouts} className='button button--show-more'>
              Show more
            </button>
          </div>
        )}

        {/* Аналогично для проектов */}
        <ProjectsList projectsList={projects} id='React_projects' />
        <Skills />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
