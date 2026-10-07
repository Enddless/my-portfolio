import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Project } from './types';

export interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: []
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    }
  }
});

export const { setProjects } = projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;