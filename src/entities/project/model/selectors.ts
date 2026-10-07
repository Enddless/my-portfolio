import type { Project } from './types';

import type { RootState } from '@/app/store';


export const selectProjects = (state: RootState): Project[] => state.projects.projects;