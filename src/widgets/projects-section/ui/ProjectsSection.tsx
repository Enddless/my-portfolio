import { useMemo, useState } from 'react';

import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Project } from '@/entities/project';
import { ProjectCard } from '@/features/project-card';
import { filterProjects, ProjectFilter, type ProjectFilterValue } from '@/features/project-filter';
import { Spinner, Title } from '@/shared/ui';

import 'swiper/css';
import 'swiper/css/pagination';

import './ProjectsSection.scss';

interface ProjectsSectionProps {
  projectsList?: Project[];
}

const BREAKPOINTS = {
  320: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 1, spaceBetween: 20 },
  1024: { slidesPerView: 2, spaceBetween: 20 },
  1281: { slidesPerView: 3, spaceBetween: 30 }
};

function ProjectsSection({ projectsList = [] }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilterValue>('all');
  const [readyFilter, setReadyFilter] = useState<ProjectFilterValue | null>(null);

  const projects = useMemo(
    () => filterProjects(projectsList, filter),
    [projectsList, filter]
  );

  const isLoading = projectsList.length === 0;
  const isSliderReady = readyFilter === filter;

  return (
    <section className='section projects' id='Проекты'>
      <div className='projects__inner container'>
        <div className='projects__title'>
          <Title text='Проекты' />
        </div>

        <ProjectFilter onChange={setFilter} value={filter} />

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={isSliderReady ? 'projects__list projects__list--ready' : 'projects__list'}>
            <div className='projects__slider-wrap'>
              <Swiper
                breakpoints={BREAKPOINTS}
                className='projects__slider'
                key={filter}
                modules={[Pagination, A11y]}
                onInit={() => setReadyFilter(filter)}
                pagination={{ el: '.projects__pagination', clickable: true }}
                slidesPerView={3}
                spaceBetween={30}>
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='projects__pagination' />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
