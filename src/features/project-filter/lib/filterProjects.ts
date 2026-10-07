import type { ProjectFilterValue } from '../model/types';

import type { Project } from '@/entities/project';


export function filterProjects(
  projects: Project[],
  filter: ProjectFilterValue
): Project[] {
  if (filter === 'all') return projects;

  return projects.filter((project) => project.type === filter);
}