import { useMemo, useState } from 'react';

import type { Project } from '@/entities/project';
import { ProjectCard } from '@/features/project-card';
import { filterProjects, ProjectFilter, type ProjectFilterValue } from '@/features/project-filter';
import { Spinner, Title } from '@/shared/ui';

import './ProjectsSection.scss';

interface ProjectsSectionProps {
  projectsList?: Project[];
}

const INITIAL_VISIBLE_COUNT = 10;
const LOAD_MORE_STEP = 5;
const STAGGER_STEP_MS = 80;

function ProjectsSection({ projectsList = [] }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilterValue>('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const projects = useMemo(
    () => filterProjects(projectsList, filter),
    [projectsList, filter]
  );

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = projects.length > visibleCount;
  const isLoading = projectsList.length === 0;

  const handleFilterChange = (value: ProjectFilterValue) => {
    setFilter(value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleShowMore = () => {
    setVisibleCount((count) => count + LOAD_MORE_STEP);
  };

  return (
    <section className='section projects' id='Проекты'>
      <div className='projects__inner container'>
        <div className='projects__title'>
          <Title text='Проекты' />
        </div>

        <ProjectFilter onChange={handleFilterChange} value={filter} />

        {isLoading ? (
          <Spinner />
        ) : (
          <div
            className='projects__list'
            key={filter}>
            <div className='projects__slider-wrap'>
              {visibleProjects.map((project, index) => (
                <div
                  className='projects__tile'
                  key={project.id}
                  style={{
                    animationDelay: `${(index % INITIAL_VISIBLE_COUNT) * STAGGER_STEP_MS}ms`
                  }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {hasMore && (
              <div className='projects__more'>
                <button
                  className='projects__more-btn'
                  onClick={handleShowMore}
                  type='button'>
                  Показать ещё
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
