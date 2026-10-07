import { projectFilterOptions, type ProjectFilterValue } from '../model/types';

import './ProjectFilter.scss';

interface ProjectFilterProps {
  value: ProjectFilterValue;
  onChange: (filter: ProjectFilterValue) => void;
}

function ProjectFilter({ value, onChange }: ProjectFilterProps) {
  return (
    <ul aria-label='Фильтр проектов' className='project-filter' role='group'>
      {projectFilterOptions.map((option) => {
        const isActive = option.value === value;

        return (
          <li className='project-filter__item' key={option.value}>
            <button
              aria-pressed={isActive}
              className={
                isActive
                  ? 'project-filter__button project-filter__button--active'
                  : 'project-filter__button'
              }
              onClick={() => onChange(option.value)}
              type='button'>
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectFilter;