import type { ProjectType } from '@/entities/project';

export type ProjectFilterValue = 'all' | ProjectType;

export interface ProjectFilterOption {
  value: ProjectFilterValue;
  label: string;
}

export const projectFilterOptions: ProjectFilterOption[] = [
  { value: 'all', label: 'Все проекты' },
  { value: 'commerce project', label: 'Коммерческие проекты' },
  { value: 'pet project', label: 'Пет-проекты' }
];