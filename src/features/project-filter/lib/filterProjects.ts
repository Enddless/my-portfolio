import type { ProjectFilterValue } from '../model/types';

import type { Project } from '@/entities/project';


export function filterProjects(
  projects: Project[],
  filter: ProjectFilterValue
): Project[] {
  const visible = projects.filter((project) => project.isVisible);
  if (filter === 'all') return visible;

  return visible.filter((project) => project.type === filter);
}